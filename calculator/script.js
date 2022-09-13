"use strict";

const display = document.querySelector(".display");
const nums = document.querySelectorAll(".num");

const numberArray = [];
let stringNumber = "";

nums.forEach((num) =>
  num.addEventListener("click", function () {
    display.textContent += num.textContent;
    stringNumber += num.textContent;
  })
);

const operators = document.querySelectorAll(".operator");
