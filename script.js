
        const userChoice = function() {
            if(document.getElementById('rock').addEventListener('click')) {
                playerSelection = 'Rock';
            } else if (document.getElementById('paper').addEventListener('click')) {
                playerSelection = 'Paper';
            } else if (document.getElementById('scissors').addEventListener('click')) {
                playerSelection = 'Scissors';
            }
        }    
        function computerPlay() {
            let gen_number = Math.floor(Math.random()*3 + 1);
            let computerHand = '';
            if (gen_number == 1) {
                computerHand = 'Rock';
            } else if (gen_number == 2) {
                computerHand = 'Paper';
            } else if (gen_number == 3) {
                computerHand = 'Scissors';
            };
            return computerHand;
            
        };

        function playerHand() {
            let playerSelection = '';
            const rockCheck = /rock/i;
            const paperCheck = /paper/i;
            const scissorsCheck = /scissors/i;
            while (playerSelection != 'Rock' || playerSelection != 'Paper' || playerSelection != 'Scissors') {
                let playerHand = prompt('Pick your hand: Rock, Paper or Scissors? ')
                if (rockCheck.test(playerHand) === true) {
                    let playerSelection = 'Rock';
                    return playerSelection;
                } else if (paperCheck.test(playerHand) === true) {
                    let playerSelection = 'Paper';
                    return playerSelection;
                } else if (scissorsCheck.test(playerHand) === true) {
                    let playerSelection = 'Scissors';
                    return playerSelection;
                } else {
                    playerHand = prompt('Pick your hand: Rock, Paper or Scissors? ')
                };
            };
        };

        

        function playRound(playerSelection, computerSelection) {
            let playerWins = 0;
            if (playerSelection === 'Rock') {
                if (computerSelection === 'Paper') {
                    document.getElementById('game-result').innerText = 'Paper covers rock! You Lose!';
                } else if (computerSelection === 'Scissors') {
                    playerWins++;
                    document.getElementById('score-num').innerText = playerWins;
                    document.getElementById('game-result').innerText = 'Rock crushes Scissors! You Win!';
                } else if (computerSelection === 'Rock') {
                    document.getElementById('game-result').innerText = 'Both chose Rock! Tie!';
                };
            } else if (playerSelection === 'Paper') {
                if (computerSelection === 'Paper') {
                    document.getElementById('game-result').innerText = 'Both chose Paper! Tie!';
                } else if (computerSelection === 'Scissors') {
                    document.getElementById('game-result').innerText ='Scissors cut Paper! You Lose!';
                } else if (computerSelection === 'Rock') {
                    playerWins++;
                    document.getElementById('score-num').innerText = playerWins;
                    document.getElementById('game-result').innerText ='Paper coveers Rock! You Win!';
                };
            } else if (playerSelection === 'Scissors') {
                if (computerSelection === 'Paper') {
                    playerWins++;
                    document.getElementById('score-num').innerText = playerWins;
                    document.getElementById('game-result').innerText ='Scissors cut Paper! You Win!';
                } else if (computerSelection === 'Scissors') {
                    document.getElementById('game-result').innerText ='Both chose Scissors! Tie!!';
                } else if (computerSelection === 'Rock') {
                    document.getElementById('game-result').innerText ='Rock crushes Scissors! You Lose!';
                };
            };
        };

        function game() {
            let roundCount = 0;
            for (let i = 0; i < 5; i++) {
                roundCount++;
                console.log('Round: ' + roundCount);
                let playerSelection = playerHand();
                let computerSelection = computerPlay();
                playRound(playerSelection, computerSelection);
            }
            console.log('You won: ' + playerWins + ' Out of 5 rounds!');
        }
