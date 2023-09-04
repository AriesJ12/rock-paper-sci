function getComputerChoice()
{
    const min = 0;
    const max = 3;
    let numericalChoice = Math.floor(Math.random() * (max - min) ) + min;
    let choice;
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