const grid = document.getElementById("grid");
const sliderSize = document.getElementById("slider-size");
const sliderValue = document.getElementById("slider-value");
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
    const square = document.createElement("div");
    square.classList.add = "grid-element";
    grid.appendChild(square);
  }
}

renderGrid(16);

function changeSize(value) {
  renderGrid(value);
  sliderSize.innerHTML = `${value} x ${value}`;
}
