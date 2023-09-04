function getComputerChoice()
{
    //set min and maximum(max refers to the number of possible values -- 0 , 1 , 2 ->3 possible)
    const MIN = 0;
    const MAX = 3;

    //randomize it(got it from net)
    let numericalChoice = Math.floor(Math.random() * (MAX - MIN) ) + MIN;
    let choice;

    //get the equivalent number -> string
    switch(numericalChoice) 
    {
        case 0:
          choice = "rock";
          break;
        case 1:
          choice = "paper";
          break;
        case 2:
          choice = "scissors";
    }
    return choice;
}

function playRound(playerSelection = prompt("Make your choice"), computerSelection = getComputerChoice())
{
    const ROCK = "rock";
    const PAPER = "paper";
    const SCISSORS = "scissor";

    let result;
    if (caseInsensitiveCompare(playerSelection, ROCK))
    {
        switch(computerSelection) 
        {
            case "rock":
              result = "draw";
              break;
            case "paper":
              result = "computer";
              break;
            case "scissors":
              result = "player";
              break;
        }
    }
    else if (caseInsensitiveCompare(playerSelection, PAPER))
    {
        switch(computerSelection) 
        {
            case "rock":
              result = "player";
              break;
            case "paper":
              result = "draw";
              break;
            case "scissors":
              result = "computer";
              break;
        }
    }
    else if (caseInsensitiveCompare(playerSelection, SCISSORS))
    {
        switch(computerSelection) 
        {
            case "rock":
              result = "computer";
              break;
            case "paper":
              result = "player";
              break;
            case "scissors":
              result = "draw";
              break;
        }
    }
    return result;
}

// copy paste from net(uses localCompare accent)
function caseInsensitiveCompare(a, b) {
    return typeof a === 'string' && typeof b === 'string'
        ? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
        : a === b;
}

