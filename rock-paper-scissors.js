// Random Generated Computer Hand
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
// Player Prompt Selected Hand
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
// Play Single Round
        function playRound(playerSelection, computerSelection) {
            if (playerSelection === 'Rock') {
                if (computerSelection === 'Paper') {
                    console.log('Paper covers rock! You Lose!');
                } else if (computerSelection === 'Scissors') {
                    console.log('Rock crushes Scissors! You Win!');
                } else if (computerSelection === 'Rock') {
                    console.log('Both chose Rock! Tie!');
                };
            } else if (playerSelection === 'Paper') {
                if (computerSelection === 'Paper') {
                    console.log('Both chose Paper! Tie!');
                } else if (computerSelection === 'Scissors') {
                    console.log('Scissors cut Paper! You Lose!');
                } else if (computerSelection === 'Rock') {
                    console.log('Paper coveers Rock! You Win!');
                };
            } else if (playerSelection === 'Scissors') {
                if (computerSelection === 'Paper') {
                    console.log('Scissors cut Paper! You Win!');
                } else if (computerSelection === 'Scissors') {
                    console.log('Both chose Scissors! Tie!!');
                } else if (computerSelection === 'Rock') {
                    console.log('Rock crushes Scissors! You Lose!');
                };
            };
        };
        let playerSelection = playerHand();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
