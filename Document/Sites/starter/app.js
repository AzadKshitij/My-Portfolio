/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, activePlayer, dice, diceValueToadd, leftValue, newRandom, winScore, isGameOver;
// scores = [0, 0];
// activePlayer = 0;
// diceValueToadd = 0;
// leftValue = "400px";
// document.querySelector(".diceChange").style.left = "400px";
// newRandom = Math.floor(Math.random() * 6) + 1;
// document.querySelector(".diceChange").src = "dice-" + newRandom + ".png";

winScore = document.getElementById('final-score').value;
console.log(winScore);
newGame();

// event Listeners
document.querySelector(".btn-hold").addEventListener("click", holdBtn);
document.querySelector(".btn-roll").addEventListener("click", rollBtn);
document.querySelector('.btn-new').addEventListener("click", newGame);


function rollBtn() {
  if (!isGameOver) {
    // rolling the dice
    dice = Math.floor(Math.random() * 6) + 1;

    // changing the value
    diceValueToadd += dice;
    document.querySelector(
      "#current-" + activePlayer
    ).textContent = diceValueToadd;

    // changing the dice
    document.querySelector(".dice").src = "dice-" + dice + ".png";

    // checking if newRandom = dice
    if (newRandom === dice) {
      document.querySelector("#score-" + activePlayer).textContent = 0;
      document.querySelector("#current-" + activePlayer).textContent = 0;
      diceValueToadd = 0;
      scores[activePlayer] = 0;
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove("active");
      nextPlayer();
      document.querySelector('.player-' + activePlayer + '-panel').classList.add("active");
      gameEnderDice();
    } else {
      document.querySelector("#score-" + activePlayer).textContent =
        scores[activePlayer];
    }

    console.log('roll function print values')
    console.log('new random = ' + newRandom);
    console.log('scores = ' + scores);
    console.log('dice value to add = ' + diceValueToadd);
    console.log('dice value = ' + dice);
    console.log('-------------------------------------------')
  }
}
function holdBtn() {
  win();
  if (!isGameOver) {
    // total score = initial + current value
    scores[activePlayer] += diceValueToadd;
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove("active");
    console.log('active player' + activePlayer + '-----------');

    // current value = 0
    document.querySelector("#current-" + activePlayer).textContent = 0;

    // changing the activePlayer
    nextPlayer();
    document.querySelector('.player-' + activePlayer + '-panel').classList.add("active");
    console.log('active player' + activePlayer + '-----------');

    document.querySelector("#current-" + activePlayer).textContent = 0;
    diceValueToadd = 0;
    console.log('active player' + activePlayer + '-----------');

    // changing the game ender dice
    gameEnderDice();
  }

  console.log("hold function print value")
  console.log('new random = ' + newRandom);
  console.log('scores = ' + scores);
  console.log('dice value to add = ' + diceValueToadd);
  console.log('dice value = ' + dice);
  console.log('-------------------------------------------')
  console.log(winScore)
}


function newGame() {
  // console.log('clicked on new game');
  // location.reload();
  scores = [0, 0];
  activePlayer = 0;
  diceValueToadd = 0;
  leftValue = "400px";
  document.querySelector(".diceChange").style.left = "400px";
  newRandom = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".diceChange").src = "dice-" + newRandom + ".png";
  document.querySelector("#score-0").textContent = 0;
  document.querySelector("#score-1").textContent = 0;
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  isGameOver = false;

  console.log('new game print values')
  console.log('new random = ' + newRandom);
  console.log('scores = ' + scores);
  console.log('dice value to add = ' + diceValueToadd);
  console.log('dice value = ' + dice);
  console.log('-------------------------------------------')
}

function nextPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function gameEnderDice() {
  newRandom = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".diceChange").src = "dice-" + newRandom + ".png";
  if (leftValue === "400px") {
    document.querySelector(".diceChange").style.left = "900px";
    leftValue = "900px";
  } else {
    document.querySelector(".diceChange").style.left = "400px";
    leftValue = "400px";
  }
}

function win() {
  console.log('win function is working');
  console.log('win function scores = ' + scores[0]);
  console.log('win function scores = ' + scores[1]);
  if (scores[0] >= 30 || scores[1] >= 30) {
    document.querySelector('.player-' + activePlayer + '-panel').classList.add("winner");
    isGameOver = true;
  }

}