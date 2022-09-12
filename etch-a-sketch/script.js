"use strict";

const gridContainer = document.querySelector(".grid-container");

const gridCell = document.createElement("div");
gridCell.style.width = `${60 / 4}rem`;
gridCell.style.height = `${60 / 4}rem`;
gridCell.classList.add("grid-cell");

const defaultGridLoad = function () {
  for (let i = 0; i < 16; i++) {
    gridContainer.appendChild(gridCell.cloneNode(true));
  }
};

defaultGridLoad();
