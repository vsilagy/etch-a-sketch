const grid = document.getElementById("grid");
const controls = document.getElementsByClassName(".controls");
const randomBtn = document.getElementById("random-btn");
const blackBtn = document.getElementById("black-btn");
const blueBtn = document.getElementById("blue-btn");
const eraserBtn = document.getElementById("eraser-btn");
const clearBtn = document.getElementById("clear-btn");
const gridBtn = document.getElementById("grid-btn");
const sliderText = document.getElementById("slider-text");
const sliderValue = document.getElementById("slider-value");
const colorBtn = document.getElementById("color-btn");

let size = 32;
let color = "black";

// Event listeners
colorBtn.addEventListener("input", (e) => handleChangeColor(e.target.value));
randomBtn.addEventListener("click", () => handleChangeColor("random"));
eraserBtn.addEventListener("click", () => handleChangeColor("white"));
clearBtn.addEventListener("click", () => clearGrid());
sliderValue.addEventListener("change", (e) => handleChangeSize(e.target.value));

// grid size
function renderGrid(size) {
  // reset the grid
  let squares = grid.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  // grid columns and rows
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  // grid squares
  let gridSize = size * size;
  for (let i = 0; i < gridSize; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", handleColorSquare);
    grid.appendChild(square);
  }
}

function handleChangeSize(value) {
  renderGrid(value);
  sliderText.innerHTML = `${value} x ${value}`;
}

function handleColorSquare(e) {
  if (color === "random") {
    e.target.style.backgroundColor = randomColor();
  } else {
    e.target.style.backgroundColor = color;
  }
}

function handleChangeColor(value) {
  color = value;
}

function randomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function clearGrid() {
  let squares = grid.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

renderGrid(size);
