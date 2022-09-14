"use strict";

const display = document.querySelector(".display");
const nums = document.querySelectorAll(".num");

const numberArray = [];
let stringNumber = "";

// Math functions
const multiply = function (num1, num2) {
  return num1 * num2;
};
const divide = function (num1, num2) {
  return num1 / num2;
};
const add = function (num1, num2) {
  return Number(num1) + Number(num2);
};
const substract = function (num1, num2) {
  return num1 - num2;
};

nums.forEach((num) =>
  num.addEventListener("click", function () {
    display.textContent += num.textContent;
    stringNumber += num.textContent;
  })
);

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", function () {
    display.textContent += operator.textContent;
    numberArray.push(stringNumber);
    stringNumber = "";
  });
});

const equal = document.querySelector(".equal");

equal.addEventListener("click", function () {
  let displayStr = display.textContent;
  numberArray.push(stringNumber);
  stringNumber = "";

  if (displayStr.includes("x")) {
    display.textContent = multiply(...numberArray);
  } else if (displayStr.includes("/")) {
    display.textContent = divide(...numberArray);
  } else if (displayStr.includes("+")) {
    display.textContent = add(...numberArray);
  } else if (displayStr.includes("-")) {
    displayStr.textContent = substract(...numberArray);
  }
});
