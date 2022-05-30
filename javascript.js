
let yourScore=0
let computerScore=0
const hands = ["rock", "paper", "scissors"];


function computerPlay() {
let a = Math.floor(Math.random()*3);
return hands[a];
}

function getChoice(){
    checkWin();
let buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        return playRound(button.id, computerPlay());
    });
});       
}

let playerChoice = getChoice();

let computerChoice = computerPlay();


function checkWin(){
if (yourScore >= 5) {
    alert ("You win! You ROCK!");

location.reload()};

if (computerScore >= 5){
    alert ("Dwayne won. It looks like you've hit ROCK bottom.");
    location.reload()};

return;
}


function printScores(){
    document.getElementById("player").textContent = `You: ${yourScore}`;
    document.getElementById("computer").textContent = `Dwayne: ${computerScore}`;
    return;
}

function playRound(playerChoice, computerChoice){
    


if (playerChoice==="rock" && computerChoice==="rock") {
    alert ("Dwayne chose Rock - it's a draw");
    yourScore+=0.5;
    computerScore+=0.5;
    printScores();
}
if (playerChoice==="rock" && computerChoice==="scissors") {
    alert ("Dwayne chose Scissors - you win!")
    yourScore+=1;
    printScores();
}
if (playerChoice==="rock" && computerChoice==="paper") {
    alert ("Dwayne chose Paper - you lose.")
    computerScore+=1;
    printScores();
}
if (playerChoice==="paper" && computerChoice==="paper") {
    alert ("Dwayne chose Paper - it's a draw.")
yourScore+=0.5;
computerScore+=0.5;
printScores();
}
if (playerChoice==="paper" && computerChoice==="rock") {
    alert ("Dwayne chose Rock - you win!")
yourScore+=1;
printScores();
}
if (playerChoice==="paper" && computerChoice==="scissors") {
    alert ("Dwayne chose Scissors - you lose.")
computerScore+=1;
printScores();
}
if (playerChoice==="scissors" && computerChoice==="scissors") {
    alert ("Dwayne chose Scissors - it's a draw.")
yourScore+=0.5;
computerScore+=0.5;
printScores();
}
if (playerChoice==="scissors" && computerChoice==="paper") {
    alert ("Dwayne chose paper - you win!")
yourScore+=1;
printScores();
}
if (playerChoice==="scissors" && computerChoice==="rock") {
    alert ("Dwayne chose Rock - you lose.")
computerScore+=1
printScores();
}


checkWin();
return;}
