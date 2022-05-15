const hands = ["Rock", "Paper", "Scissors"];
function computerPlay() {
let a = Math.floor(Math.random()*3);
return hands[a]
}
alert (computerPlay())