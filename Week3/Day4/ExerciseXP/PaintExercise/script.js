const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "black",
  "white",
  "gray",
  "brown",
  "pink",
  "purple",
  "cyan",
  "magenta",
  "#ff5733",
  "#33ff57",
  "#3357ff",
  "#f1c40f",
  "#1abc9c",
  "#f2abcc",
];

const palette = document.getElementById("color_palette");

let selectedColor;
let isDrawing = false;

document.addEventListener("mouseup", () => {
  isDrawing = false;
});

const button = document.createElement("button");
button.addEventListener("click", () => {
    canvas.innerHTML = "";
    createCanvas();
});
palette.append(button);

function setColors() {
  
  for (const c of colors) {
    const element = document.createElement("div");
    button.innerText = "Clear";

    element.classList.add("color");

    element.style.backgroundColor = c;

    element.addEventListener("click", function setColor() {
      selectedColor = c;
    });

    palette.appendChild(element);
  }
}

const canvas = document.getElementById("canvas");

function createCanvas() {
  const cellSize = 20;

  const canvasWidth = canvas.clientWidth;
  const canvasHeight = canvas.clientHeight;

  const cols = Math.floor(canvasWidth / cellSize);
  const rows = Math.floor(canvasHeight / cellSize);

  const totalCells = cols * rows;

  canvas.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");

    cell.classList.add("cell");
    cell.addEventListener("mousedown", () => {
      isDrawing = true;
      cell.style.backgroundColor = selectedColor;
    });

    cell.addEventListener("mouseover", () => {
      if (isDrawing) {
        cell.style.backgroundColor = selectedColor;
      }
    });

    canvas.appendChild(cell);
  }
}

createCanvas();

setColors();
