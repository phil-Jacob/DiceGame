let player1Score = 0;
let player2Score = 0;
var player1Turn;

const player1ScoreBox = document.getElementById("player-1-score");
const player2ScoreBox = document.getElementById("player-2-score");
const player1ScoreUpdate = document.getElementById("player-1-score-update");
const player2ScoreUpdate = document.getElementById("player-2-score-update");
const messageText = document.getElementById("message");
const rollBtn1 = document.getElementById("roll-btn-1");
const rollBtn2 = document.getElementById("roll-btn-2");
const resetBtn = document.getElementById("reset-btn");
const scoreBox1 = document.getElementById("score-box-1");
const scoreBox2 = document.getElementById("score-box-2");
const dice = document.querySelector(".dice");

rollBtn1.addEventListener("click", player1Turn);
rollBtn2.addEventListener("click", player2Turn);

function setPlayer() {
  let randomPlayer = Math.floor(Math.random() * 2) + 1;
  if (randomPlayer == 1) {
    disable2();
    rollBtn2.classList.remove("active");
    rollBtn1.classList.add("active");
    messageText.textContent = "Player-1 Turn";
    scoreBox1.classList.add("active");
    scoreBox2.classList.remove("active");
  } else {
    disable1();
    rollBtn1.classList.remove("active");
    rollBtn2.classList.add("active");
    messageText.textContent = "Player-2 Turn";
    scoreBox2.classList.add("active");
    scoreBox1.classList.remove("active");
  }
}
function player1Turn() {
  player1Turn = true;
  startGame();
}

function player2Turn() {
  player1Turn = false;
  startGame();
}

function rollDice(randomNumber) {
  dice.src = `./assets/dice-${randomNumber}.png`;
}
resetBtn.addEventListener("dblclick", startAgain);

function disable1() {
  document.getElementById("roll-btn-1").disabled = true;
  document.getElementById("roll-btn-2").disabled = false;
}
function disable2() {
  document.getElementById("roll-btn-2").disabled = true;
  document.getElementById("roll-btn-1").disabled = false;
}
function resetGame() {
  rollBtn1.style.display = "none";
  rollBtn2.style.display = "none";
  if (player1Score || player2Score >= 30) {
    scoreBox1.classList.remove("active");
    scoreBox2.classList.remove("active");
  }
  resetBtn.style.display = "block";
}

function startGame() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  if (player1Turn) {
    player1Score += randomNumber;
    player1ScoreUpdate.textContent = player1Score;
    player1ScoreBox.textContent = randomNumber;
    disable1();
    rollDice(randomNumber);
    scoreBox1.classList.remove("active");
    scoreBox2.classList.add("active");
    rollBtn1.classList.remove("active");
    rollBtn2.classList.add("active");
    messageText.textContent = "Player-2 Turn";
  } else {
    player2Score += randomNumber;
    player2ScoreUpdate.textContent = player2Score;
    player2ScoreBox.textContent = randomNumber;
    scoreBox2.classList.remove("active");
    scoreBox1.classList.add("active");
    rollBtn2.classList.remove("active");
    rollBtn1.classList.add("active");
    disable2();
    rollDice(randomNumber);
    messageText.textContent = "Player-1 Turn";
  }
  if (player1Score >= 30) {
    messageText.textContent = "PLAYER1 WINS";
    messageText.style.fontSize('larger')
    resetGame();
  } else if (player2Score >= 30) {
    messageText.textContent = "PLAYER2 WINS";
    resetGame();
  }

  player1Turn = !player1Turn;
}



function startAgain() {
  player1Score = 0;
  player2Score = 0;
  dice.classList.add("hidden");
  
  setPlayer();
  player1ScoreBox.textContent = "0";
  player2ScoreBox.textContent = "0";
  player1ScoreUpdate.textContent = "0";
  player2ScoreUpdate.textContent = "0";
  rollBtn1.style.display = "block";
  rollBtn2.style.display = "block";
  resetBtn.style.display = "none";
 
}