"use strict";

const gridContainer = document.querySelector(".grid-container");

const gridCell = document.createElement("div");
gridCell.classList.add("grid-cell");

const customGridBtn = document.querySelector(".btn-custom");
const resetGridBtn = document.querySelector(".btn-reset");

// DEFAULT GRID LOAD
const defaultGridLoad = function () {
  gridCell.style.width = `${60 / 16}rem`;
  gridCell.style.height = `${60 / 16}rem`;

  for (let i = 0; i < 256; i++) {
    gridContainer.appendChild(gridCell.cloneNode(true));
  }
};

// CLEAR GRiD
const clearGrid = function () {
  gridContainer.innerHTML = "";
};

// RESET GRID
const resetGrid = function () {
  clearGrid();
  defaultGridLoad();
  cellColoring();
};

// CUSTOM GRID LOAD
const customGridLoad = function () {
  clearGrid();
  const chooseDimensions = prompt("Choose dimensions of a grid: 0-100");

  gridCell.style.width = `${60 / chooseDimensions}rem`;
  gridCell.style.height = `${60 / chooseDimensions}rem`;

  for (let i = 0; i < chooseDimensions ** 2; i++) {
    gridContainer.appendChild(gridCell.cloneNode(true));
  }

  cellColoring();
};

defaultGridLoad();

resetGridBtn.addEventListener("click", resetGrid);
customGridBtn.addEventListener("click", customGridLoad);

const cellColoring = function () {
  const allGridCells = document.querySelectorAll(".grid-cell");

  allGridCells.forEach((gridCell) =>
    gridCell.addEventListener("mouseenter", function () {
      gridCell.classList.add("colored");
    })
  );
};

cellColoring();
