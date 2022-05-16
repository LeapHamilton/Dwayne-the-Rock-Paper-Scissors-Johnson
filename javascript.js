//function to make computer choose a hand
const hands = ["rock", "paper", "scissors"];
function computerPlay() {
let a = Math.floor(Math.random()*3);
return hands[a]
}

//get player's choice
let computerChoice = computerPlay();
let playerChoice=prompt("Type Rock, Paper or Scissors and click ok!");
playerChoice=playerChoice.toLowerCase().trim();

//comparison of player vs computer choice
if (playerChoice==="rock" && computerChoice==="rock"){alert ("Computer chose Rock - it's a draw")}
else if (playerChoice==="rock" && computerChoice==="scissors") {alert ("Computer chose Scissors - you win!")}
else if (playerChoice==="rock" && computerChoice==="paper") {alert ("Computer chose Paper - you lose.")}
if (playerChoice==="paper" && computerChoice==="paper") {alert("Computer chose Paper - it's a draw.")}
else if (playerChoice==="paper" && computerChoice==="rock") {alert("Computer chose Rock - you win!")}
else if (playerChoice==="paper" && computerChoice==="scissors") {alert ("Computer chose Scissors - you lose.")}
if (playerChoice==="scissors" && computerChoice==="scissors") {alert ("Computer chose Scissors - it's a draw.")}
else if (playerChoice==="scissors" && computerChoice==="paper") {alert ("Computer chose paper - you win!")}
else if (playerChoice==="scissors" && computerChoice==="rock") {alert("Computer chose Rock - you lose.")}
document. location. reload(true) 