
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
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const prompt = document.getElementById("prompt");
const winner = document.getElementById("winner");

rock.addEventListener('click', function(){
    playRound('rock', getComputerChoice());
    checkScores();
    getScores();
    checkWinner()
});
paper.addEventListener('click', function(){
    playRound('paper', getComputerChoice());
    checkScores();
    getScores();
    checkWinner()
});
scissors.addEventListener('click', function(){
    playRound('scissors', getComputerChoice());
    checkScores();
    getScores();
    checkWinner()
});



function playRound(playerChoice, computerChoice) {
    

    if (computerChoice === playerChoice) { 
        prompt.textContent = "Tie, you gotta be more original next time"
    }

    else if (computerChoice === "rock") {
        if (playerChoice === "scissors") {
          prompt.textContent = "You have lost... This computer uses it's rock to destroy your blades"
          return computerScore++;
        } else {
          if (playerChoice === "paper")
            prompt.textContent = "You win! You asphyxiate that rock with your paper"
            return playerScore++;
        } 

    }
    else if (computerChoice === "paper") {
        if (playerChoice === "scissors") {
            prompt.textContent = "You win... You cut the computer into tiny pieces with your scissors"  
              return playerScore++;
        } else {
              if (playerChoice === "rock")
              prompt.textContent = "You lose this time! the paper wraps you and isolates you from the world"
                return computerScore++;  
            }
    }        


    else if ( computerChoice === "scissors") {
        if (playerChoice === "paper") {
            prompt.textContent = "You've lost, the computer quickly discombabulates you"
            return computerScore++;  
        } else {
            if (playerChoice === "rock")
            prompt.textContent = "You win! you smash those scissors in a second"
            return playerScore++;  
        }
    }

    
}

const computerLost = document.querySelector(".computerLost")
const playerLost = document.querySelector(".playerLost")

function checkScores(){ 
    if (playerScore === 3) {
        winner.textContent = "You win, but now you gotta face a billion more computers"
        computerLost.play();
    }

    else if (computerScore === 3) {
        winner.textContent = "You have lost and condemned humanity to an eternity of suffering"
        playerLost.play();
    }
}

// intro animation
let typingAudio = new Audio("images/")
let i = 0;
let txt = `The world is coming to an end: AI is destroying every city on earth and turning every human being into data. 
The only way to save yourself is to destroy them, but you only have a pair of scissors, some stones and a notebook.
...
Wanna try?`
const typingSound = document.querySelector(".typingSound");
let speed = 80; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  
  if (i < txt.length) {
    document.querySelector(".story").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    //typingSound.play();//
    
    }
   
  }









//make intro disappear

const startSound = document.querySelector(".startSound");
const introbutton = document.querySelector(".startbutton");
const intro = document.querySelector(".intro");
const content = document.querySelector (".content");



introbutton.addEventListener("click", () => {
        intro.style.display = "none";
        content.style.display = "flex";
        startSound.play();
        startSound.currentTime() = 1;
        
    
    }
)

//buttons sounds
const hoverSound = document.querySelector(".soundhover")


rock.addEventListener("click", () => {
    hoverSound.play();
    hoverSound.currentTime = 0.3;
    
})

paper.addEventListener("click", () => {
    hoverSound.play();
    hoverSound.currentTime = 0.3;
    
})

scissors.addEventListener("click", () => {
    hoverSound.play();
    hoverSound.currentTime = 0.3;
    
})

//Update Scores

let playerScoreText = document.getElementById("playerscore");
let computerScoreText = document.getElementById("computerscore");

function getScores(){
playerScoreText.textContent = "Your Score: " + playerScore
computerScoreText.textContent = "Computer Score: " + computerScore
}

//check winner

const winnerPop = document.querySelector(".winnerpopup");
const buttons = document.querySelector(".buttons")
function checkWinner(){
    if (playerScore === 3 || computerScore === 3) {
     winnerPop.style.visibility = "visible";
     buttons.style.visibility = "hidden";
     prompt.style.visibility = "hidden";
     playerScoreText.style.visibility = "hidden";
     computerScoreText.style.visibility = "hidden";
    }
    else if (playerScore === 0 && computerScore === 0) {
        winnerPop.style.visibility = "hidden";
        buttons.style.visibility = "visible";
        prompt.style.visibility = "visible";
        playerScoreText.style.visibility = "visible";
     computerScoreText.style.visibility = "visible";
       }
}

//start over

const startover = document.querySelector(".startover");

startover.addEventListener("click", ()=> {
    playerScore = 0;
    computerScore = 0;
    getScores();
    checkWinner();
    prompt.textContent = "Time for revenge"


})













        

    
    
    
     



