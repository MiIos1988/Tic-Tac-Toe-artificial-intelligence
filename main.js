const container = document.querySelector(".container");
let figure = "X"
let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 2],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 8],
]

makeGrid();

let boxes = document.querySelectorAll(".box");
console.log(boxes)

boxes.forEach(box => box.addEventListener("click", fillField))

function fillField() {
    this.innerText = figure;
    figure === "X" ? figure = "O" : figure = "X"
    checkResult()
}

function checkResult() {
    lines.forEach(line => {
        box1 = boxes[line[0]]
        box2 = boxes[line[1]]
        box3 = boxes[line[2]]

        if (box1.innerText === box2.innerText && box1.innerText === box3.innerText && box1.innerText !== "") {
            box1.style.background = "tomato"
            box2.style.background = "tomato"
            box3.style.background = "tomato"
            stopGame()
        }
    })

}

function stopGame() {
    boxes.forEach(box => box.removeEventListener("click", fillField))
}

function makeGrid() {
    let text = ``;
    for (let i = 0; i < 9; i++) {
        text += `<div class="box"></div>`
    }
    container.innerHTML = text;
}
