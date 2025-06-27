let b = document.getElementsByClassName("boxes");
let f = true;
let gameOver = false;

let winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  for (let combo of winning) {
    let [a, b1, c] = combo;
    let val1 = b[a].innerHTML;
    let val2 = b[b1].innerHTML;
    let val3 = b[c].innerHTML;
    if (val1 !== "" && val1 === val2 && val2 === val3) {
      gameOver = true;
      alert(`Player ${val1} wins!`);
      return;
    }
  }

  let filled = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i].innerHTML !== "") filled++;
  }
  if (filled === 9) {
    alert("It's a draw!");
    gameOver = true;
  }
}

let fxn = (e) => {
  if (gameOver) return;

  if (e.target.innerHTML === "") {
    if (f) e.target.innerHTML = "O";
    else e.target.innerHTML = "X";
    f = !f;

    checkWinner();
  }
};

for (let i = 0; i < b.length; i++) {
  b[i].addEventListener("click", fxn);
}

document.getElementById("reset").addEventListener("click", () => {
  for (let i = 0; i < b.length; i++) {
    b[i].innerHTML = "";
  }
  f = true;

  gameOver = false;
});
