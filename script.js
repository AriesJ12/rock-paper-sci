function getComputerChoice()
{
    //set min and maximum(max refers to the number of possible values -- 0 , 1 , 2 ->3 possible)
    const MIN = 0;
    const MAX = 3;

    //randomize it(got it from net)
    let numericalChoice = Math.floor(Math.random() * (max - min) ) + min;
    let choice;

    //get the equivalent number -> string
    switch(numericalChoice) 
    {
        case 0:
          choice = "Rock";
          break;
        case 1:
          choice = "Paper";
          break;
        case 2:
          choice = "Scissors";
    }
    return choice;
}

function playRound(playerSelection = prompt("Make your choice"), computerSelection = getComputerChoice())
{
    const ROCK = "rock";
    const PAPER = "paper";
    const SCISSORS = "scissor";

    if (caseInsensitiveCompare(playerSelection, ROCK))
    {

    }
    else if (caseInsensitiveCompare(playerSelection, PAPER))
    {

    }
    else if (caseInsensitiveCompare(playerSelection, SCISSORS))
    {

    }
    else
    {

    }
}

// copy paste from net(uses localCompare accent)
function caseInsensitiveCompare(a, b) {
    return typeof a === 'string' && typeof b === 'string'
        ? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
        : a === b;
}