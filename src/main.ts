type HtmlElement = HTMLElement | null;

let game = document.querySelector(".game");
let text1: HtmlElement = document.getElementById("text1");
let text2 = document.getElementById("text2");
let btn: HtmlElement = document.getElementById("btn");
let playerX = true;
let matrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];



btn !== null && btn.addEventListener("click", () => {
  matrix[0][0] = 0;
  matrix[0][1] = 0;
  matrix[0][2] = 0;
  matrix[1][0] = 0;
  matrix[1][1] = 0;
  matrix[1][2] = 0;
  matrix[2][0] = 0;
  matrix[2][1] = 0;
  matrix[2][2] = 0;
  playerX = true;
  render();
  if(text1 !== null) text1.innerText = "";
});

function render() {
  if (game !== null) game.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    let row = document.createElement("div");
    if (game !== null) game.appendChild(row);
    for (let j = 0; j < 3; j++) {
      let field = document.createElement("div");
      field.classList.add("row");
      row.appendChild(field);
      let text = "";
      if (matrix[i][j] === 1) {
        text = "X";
      }
      if (matrix[i][j] === 2) text = "O";
      field.innerText = text;
      if (playerX === true) {
        field.addEventListener("click", () => valueEntries(i, j));
      } else {
        field.addEventListener("click", () => stop());
      }
    }
  }
}
function end() {
  playerX = false;
}
function valueEntries(i: number, j: number) {
  if (matrix[i][j] === 0) {
    matrix[i][j] = 1;
    console.log(matrix[i][j]);
  }
  playerX = false;
  setTimeout(valueMatrix, 500);

  render();
}
function stop() {}

function valueMatrix() {
  playerX = true;
  //combination 1
  if (
    matrix[0][0] === 1 ||
    matrix[0][2] === 1 ||
    matrix[2][0] === 1 ||
    matrix[2][2] === 1 ||
    matrix[0][1] === 1 ||
    matrix[1][0] === 1 ||
    matrix[1][2] === 1 ||
    matrix[2][1] === 1
  ) {
    if (matrix[1][1] === 0) matrix[1][1] = 2;
  }
  if (matrix[1][1] === 1) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][2] === 0 &&
      matrix[0][1] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }

  if (
    (matrix[0][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  //combination 2
  if (
    matrix[0][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  //combination 3
  if (
    matrix[0][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][0] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[1][2] === 0 &&
    matrix[2][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][2] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][1] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  //combination 4
  if (
    matrix[0][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][2] === 0 &&
    matrix[0][1] === 0 &&
    matrix[2][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0 &&
      matrix[0][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[0][2] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[2][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][2] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  //combination 5
  if (
    matrix[0][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[0][1] === 0 &&
    matrix[2][1] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[0][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][0] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[0][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[1][2] === 0 &&
    matrix[1][0] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  // combination 6
  if (
    matrix[2][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[2][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[1][0] === 0 &&
    matrix[0][0] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[2][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  // combination 7
  if (
    matrix[2][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    (matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[2][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[2][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  //combination 8
  if (
    matrix[2][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[2][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    (matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[2][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  //combination 9
  if (
    matrix[2][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[2][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    (matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0) ||
    (matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[2][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  //combination 10
  if (
    matrix[0][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    (matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 1 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[2][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    matrix[0][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][0] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    (matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[0][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][0] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  // combination 11
  if (
    matrix[0][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  // combination 12
  if (
    matrix[0][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0)
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  // combination 13
  if (
    matrix[0][1] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[2][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[2][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[2][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 2 &&
    matrix[1][0] === 2 &&
    matrix[1][1] === 2 &&
    matrix[2][0] === 2
  ) {
    if (matrix[1][2] === 1) matrix[1][2] = 0;
  }
  // combination 14
  if (
    matrix[0][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][1] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  // combination 15
  if (
    matrix[0][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  // combination 16
  if (
    matrix[0][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0)
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[0][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  // combination 17
  if (
    matrix[2][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[0][2] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[0][2] === 0 &&
      matrix[0][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0)
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[0][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  // combination 18
  if (
    matrix[2][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[0][0] === 0 &&
      matrix[2][2] === 0 &&
      matrix[0][1] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0)
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  // combination 19
  if (
    matrix[2][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][0] === 0 &&
      matrix[0][0] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][2] === 0 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][0] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0)
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  // combination 20
  if (
    matrix[2][1] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[0][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[0][2] === 0 &&
      matrix[2][2] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  // combination 21
  if (
    matrix[2][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0)
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    (matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0)
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[2][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  // combination 22
  if (
    matrix[1][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][2] === 1 &&
    matrix[2][0] === 1 &&
    // matrix[2][1] === 1 &&
    matrix[0][0] === 2 &&
    matrix[0][1] === 2 &&
    matrix[0][2] === 2 &&
    matrix[1][1] === 2
  ) {
    if (matrix[2][1] === 1) matrix[2][1] = 0;
  }
  // combination 23
  if (
    matrix[1][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    (matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[0][1] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[0][1] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  // combination 24
  if (
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    (matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[2][0] === 0 &&
      matrix[2][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][0] === 1 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  // combination 25
  if (
    matrix[1][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][0] === 1 &&
      matrix[2][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][0] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[1][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  // combination 26
  if (
    matrix[1][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    (matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    (matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][0] === 1 &&
    matrix[2][1] === 1 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  // combination 27
  if (
    matrix[0][0] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }

  if (
    matrix[1][2] === 1 &&
    matrix[0][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[0][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[0][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  // combination 28
  if (
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][2] === 0) matrix[2][2] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][2] === 0 &&
    matrix[0][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][0] === 0) matrix[0][0] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  // combination 29
  if (
    matrix[1][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[0][0] === 2 &&
    matrix[2][1] === 2 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  // combination 30
  if (
    matrix[1][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 2 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  // combination 31
  if (
    matrix[1][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][1] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  // combination 32
  if (
    matrix[1][1] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  // combination 33
  if (
    matrix[1][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  // combination 34
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0 &&
    matrix[2][2] === 0 &&
    matrix[2][1] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0 &&
    matrix[2][2] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][1] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }

  // combination 35
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }

  if (
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  // combination 36
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[0][2] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }

  if (
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][1] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][0] === 0 &&
    matrix[2][1] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  // combination 37
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][2] === 0 &&
    matrix[2][1] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }

  if (
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  // combination 37
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][2] === 1 &&
    matrix[0][1] === 0 &&
    matrix[2][1] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }

  if (
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][1] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[1][0] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][1] === 0 &&
      matrix[2][1] === 0)
  ) {
    if (matrix[0][1] === 0) matrix[0][1] = 2;
  }
  //combination 38
  if (
    matrix[1][1] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][1] === 0) matrix[2][1] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }

  if (
    (matrix[1][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][0] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][2] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    (matrix[1][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[0][1] === 1 &&
    matrix[0][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[1][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  // combination 39
  if (
    matrix[1][1] === 1 &&
    matrix[0][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[2][0] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }

  if (
    (matrix[1][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[2][0] === 0 &&
      matrix[2][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[1][2] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[2][0] === 0)
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[0][1] === 1 &&
    matrix[1][2] === 1 &&
    matrix[2][0] === 1 &&
    matrix[0][2] === 0 &&
    matrix[2][2] === 0
  ) {
    if (matrix[0][2] === 0) matrix[0][2] = 2;
  }
  // combination 39
  if (
    matrix[1][1] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][0] === 0 &&
    matrix[1][2] === 0 &&
    matrix[2][0] === 0
  ) {
    if (matrix[2][0] === 0) matrix[2][0] = 2;
  }

  if (
    (matrix[1][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[0][2] === 1 &&
      matrix[1][0] === 0 &&
      matrix[1][2] === 0) ||
    (matrix[1][1] === 1 &&
      matrix[0][1] === 1 &&
      matrix[2][2] === 1 &&
      matrix[1][2] === 1 &&
      matrix[0][2] === 0 &&
      matrix[1][0] === 0)
  ) {
    if (matrix[1][0] === 0) matrix[1][0] = 2;
  }
  if (
    matrix[1][1] === 1 &&
    matrix[0][1] === 1 &&
    matrix[2][2] === 1 &&
    matrix[1][0] === 1 &&
    matrix[0][2] === 0 &&
    matrix[1][2] === 0
  ) {
    if (matrix[1][2] === 0) matrix[1][2] = 2;
  }
  if (
    (matrix[0][0] === 1 && matrix[0][1] === 1 && matrix[0][2] === 1) ||
    (matrix[1][0] === 1 && matrix[1][1] === 1 && matrix[1][2] === 1) ||
    (matrix[2][0] === 1 && matrix[2][1] === 1 && matrix[2][2] === 1) ||
    (matrix[0][0] === 1 && matrix[1][0] === 1 && matrix[2][0] === 1) ||
    (matrix[0][1] === 1 && matrix[1][1] === 1 && matrix[2][1] === 1) ||
    (matrix[0][2] === 1 && matrix[1][2] === 1 && matrix[2][2] === 1) ||
    (matrix[0][0] === 1 && matrix[1][1] === 1 && matrix[2][2] === 1) ||
    (matrix[2][0] === 1 && matrix[1][1] === 1 && matrix[0][2] === 1)
  ) {
    if (text1 !== null) text1.innerText = "YOU WON!!!";
  }
  if (
    (matrix[0][0] === 2 && matrix[0][1] === 2 && matrix[0][2] === 2) ||
    (matrix[1][0] === 2 && matrix[1][1] === 2 && matrix[1][2] === 2) ||
    (matrix[2][0] === 2 && matrix[2][1] === 2 && matrix[2][2] === 2) ||
    (matrix[0][0] === 2 && matrix[1][0] === 2 && matrix[2][0] === 2) ||
    (matrix[0][1] === 2 && matrix[1][1] === 2 && matrix[2][1] === 2) ||
    (matrix[0][2] === 2 && matrix[1][2] === 2 && matrix[2][2] === 2) ||
    (matrix[0][0] === 2 && matrix[1][1] === 2 && matrix[2][2] === 2) ||
    (matrix[2][0] === 2 && matrix[1][1] === 2 && matrix[0][2] === 2)
  ) {
    if (text1 !== null) text1.innerText = "YOU LOST!!!";
    end();
  }
  render();
}
render();
