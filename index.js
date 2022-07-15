const gameOptions = ['rock', 'scissors', 'paper'];
const playerSelection = 'rock';

const computerPlay = () => {
    const randomNumber = (min, max) => {
        return Math.round(Math.random() * (max - min)) + min;
    }
    const selectedOption = gameOptions[randomNumber(0, 2)];
    return selectedOption;
} 

const playRound = (player1, computer) => {
    if (player1 === computer) {
        return 'No Winner'
    }
    else if (player1 === 'rock' && computer === 'scissors' ) {
        return 'You Win ! Rock beats Scissors. '
    }
    else if (player1 === 'rock' && computer === 'paper' ) {
        return 'You Lose ! Paper beats Rock. '
    }
    else if (player1 === 'paper' && computer === 'scissors' ) {
        return 'You Lose ! Scissors beats Paper. '
    }
    else if (player1 === 'paper' && computer === 'rock' ) {
        return 'You Win ! Paper beats Rock. '
    }
    else if (player1 === 'scissors' && computer === 'rock' ) {
        return 'You Lose ! Rock beats Scissors . '
    }
    else if (player1 === 'scissors' && computer === 'paper' ) {
        return 'You Win ! Scissors beats Paper. '
    }
};

playRound(playerSelection, computerPlay());

const game = () => {
    const gameResults = {
        totalResults: [],
        playerScore:[],
        computerScore:[]
    }
    let results = [];
    let result = ''
    for(let i =0; i < 5; i++) {
        result = playRound(playerSelection, computerPlay());
        results.push(result);
        console.log(result);
        
    }
    
    gameResults.playerScore = results.filter(name => name.includes('You Win')).length;
    gameResults.computerScore = results.filter(name => name.includes('You Lose')).length;
    gameResults.totalResults = [...results];
    return  gameResults;
}

console.log(game());

























