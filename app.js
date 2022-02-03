let cells = document.querySelectorAll(".row > div");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}
let winnerIs = document.getElementById("winnerCircle");

let turnCounter = 0;
let gameOver = 0;

let winner = [
  [cells[0], cells[1], cells[2]],
  [cells[3], cells[4], cells[5]],
  [cells[6], cells[7], cells[8]],
  [cells[0], cells[3], cells[6]],
  [cells[1], cells[4], cells[7]],
  [cells[2], cells[5], cells[8]],
  [cells[0], cells[4], cells[8]],
  [cells[2], cells[4], cells[6]],
];

function cellClicked(event) {
  if (event.target.textContent == "") {
    if (gameOver == 1) {
      itOver();
    } else if (turnCounter % 2 == 0) {
      event.target.textContent = "X";
    } else {
      event.target.textContent = "O";
    }
    turnCounter++;

    checkWinner();
  }
}

function checkWinner() {
  for (let i = 0; i < winner.length; i++) {
    let xCount = 0;
    let oCount = 0;
    for (let j = 0; j < winner[i].length; j++) {
      if (winner[i][j].textContent == "X") {
        xCount++;
      } else if (winner[i][j].textContent == "O") {
        oCount++;
      }
    }
    if (xCount == 3) {
      winnerIs.textContent += "And the winner is... X!";
      gameOver++;
    } else if (oCount == 3) {
      winnerIs.textContent += "And the winner is... O!";
      gameOver++;
    }
  }
  if (turnCounter == 9 && gameOver == 0) {
    winnerIs.textContent += "Looks like we have a draw!";
    gameOver++;
  }
}

function itOver() {
  if (gameOver === 1) {
    window.location.reload();
  }
}
