const grid = document.getElementById("grid");
// grid size
let gridSize = 16;

function renderGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

renderGrid(gridSize);
