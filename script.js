
function getComputerChoice () {
let computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (computerChoice === 1) {
        computerChoice = "rock";
    } else if (computerChoice === 2) {
    computerChoice = "paper";
    } else {
    computerChoice = "scissors";
  }
  return computerChoice
}

let playerScore = 0
let computerScore = 0



function playRound() {
    let playerChoice = (prompt("Rock, paper or Scissors?").toLowerCase());
    let computerChoice = getComputerChoice()

    if (computerChoice === playerChoice) { 
        alert ("Tie, you gotta be more original next time")
    }

    else if (computerChoice === "rock") {
        if (playerChoice === "scissors") {
          alert ("You have lost... This computer uses it's rock to destroy your blades");
          return computerScore++;
        } else {
          if (playerChoice === "paper")
            alert("You win! You asphyxiate that rock with your paper");
            return playerScore++;
        } 

    }
    else if (computerChoice === "paper") {
        if (playerChoice === "scissors") {
              alert("You win... You cut the computer into tiny pieces with your scissors");
              return playerScore++;
        } else {
              if (playerChoice === "rock")
                alert("You lose this time! the paper wraps you and isolates you from the world");
                return computerScore++;  
            }
    }        


    else if ( computerChoice === "scissors") {
        if (playerChoice === "paper") {
            alert("You've lost, the computer quickly discombabulates you");
            return computerScore++;  
        } else {
            if (playerChoice === "rock")
            alert("You win! you smash those scissors in a second");
            return playerScore++;  
        }
    }
}


function game() {
for (; computerScore < 3 || playerScore < 3;) {
    playRound() 
    if (playerScore === 3) {
        return alert ("Wow! you've beaten the machine 3 times!");
    }

    else if (computerScore === 3) {
        return alert ("Computer won 3 times: What a loser, you cannot even win in a child's game like this one");
    }
}

}



        

    
    
    
     



