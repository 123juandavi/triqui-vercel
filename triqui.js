const options = document.querySelectorAll("button");
let shift = 0;

const board = [];

function haGanado() {
    if (board[0] && board[0] === board[1] && board[0] === board[2]) {
        return true;
    } else if (board[3] && board[3] === board[4] && board[3] === board[5]) {
        return true;
    } else if (board[6] && board[6] === board[7] && board[6] === board[8]) {
        return true;
    } else if (board[0] && board[0] === board[3] && board[0] === board[6]) {
        return true;
    } else if (board[1] && board[1] === board[4] && board[1] === board[7]) {
        return true;
    } else if (board[2] && board[2] === board[5] && board[2] === board[8]) {
        return true;
    } else if (board[0] && board[0] === board[4] && board[0] === board[8]) {
        return true;
    } else if (board[2] && board[2] === board[4] && board[2] === board[6]) {
        return true;
    }
    return false;
}

window.addEventListener("DOMContentLoaded", pressButton);

function pressButton() {
  options.forEach((item, idx) =>
    item.addEventListener("click", (event) => pressedButton(event, idx))
  );
}

function pressedButton(event, pos) {
  let x = "X";
  let o = "O";
  let currentBtn = event.target;

  if (shift % 2 === 0) {
    currentBtn.style.backgroundColor = "#008000";
    currentBtn.textContent = x;
    board[pos] = x;
    shift++;
  } else {
    currentBtn.style.backgroundColor = "#0d58e4";
    currentBtn.textContent = o;
    board[pos] = o;
    shift++;
  }

  const winner = validateGame();
  if (winner) {
    window.alert(`Felicitaciones, ${winner} es el ganador.`);
    resetGame();
  } else if (shift === 9) { 
    window.alert('Es un empate, no hay ganador.');
    resetGame();
  }
}

function validateGame() {
    if (haGanado()) {
        return board[0]; 
    }
    return false;
}

function resetGame() {
  options.forEach((item) => {
    item.style.backgroundColor = "";
    item.textContent = "";
  });
  board.length = 0;
  shift = 0;
}
