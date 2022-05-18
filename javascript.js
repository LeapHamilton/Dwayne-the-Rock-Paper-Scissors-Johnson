
let yourScore=0
let computerScore=0
//function to make computer choose a hand
const hands = ["rock", "paper", "scissors"];
function computerPlay() {
let a = Math.floor(Math.random()*3);
return hands[a];
}





//function to play a round
function playRound(){
    let computerChoice = computerPlay();
    let playerChoice=prompt("Type Rock, Paper or Scissors and click ok!");
    playerChoice=playerChoice.toLowerCase().trim();

//comparison of player vs computer choice
if (playerChoice==="rock" && computerChoice==="rock") {
    alert ("Computer chose Rock - it's a draw");
    yourScore+=0.5;
    computerScore+=0.5;
}
if (playerChoice==="rock" && computerChoice==="scissors") {
    alert ("Computer chose Scissors - you win!")
    yourScore+=1;
}
if (playerChoice==="rock" && computerChoice==="paper") {
    alert ("Computer chose Paper - you lose.")
    computerScore+=1;
}
if (playerChoice==="paper" && computerChoice==="paper") {alert ("Computer chose Paper - it's a draw.")}
if (playerChoice==="paper" && computerChoice==="rock") {alert ("Computer chose Rock - you win!")}
if (playerChoice==="paper" && computerChoice==="scissors") {alert ("Computer chose Scissors - you lose.")}
if (playerChoice==="scissors" && computerChoice==="scissors") {alert ("Computer chose Scissors - it's a draw.")}
if (playerChoice==="scissors" && computerChoice==="paper") {alert ("Computer chose paper - you win!")}
if (playerChoice==="scissors" && computerChoice==="rock") {alert ("Computer chose Rock - you lose.")}

return}


//the loop that contains the game
function game() {
    for (let i=0; i<5;i++) {
    playRound();

    if (i===4 && yourScore>computerScore) {
        alert(`Congratulations! You win ${yourScore} to ${computerScore}`)
    } 
    if (i===4 && yourScore<computerScore) {
        alert (`Sorry. You lose ${yourScore} to ${computerScore}`)
    }
    if (i===4 && yourScore===computerScore) {alert(`It's a ${yourScore}-${computerScore} tie!`)}
    }
    location.reload();
    return}

    
//call the frikkin function, Richard! 
game();