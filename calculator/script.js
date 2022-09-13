"use strict";

const display = document.querySelector(".display");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) =>
  btn.addEventListener("click", function () {
    display.textContent += btn.textContent;
  })
);
