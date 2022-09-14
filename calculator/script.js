"use strict";

const display = document.querySelector(".display");
const nums = document.querySelectorAll(".num");

const numberArray = [];
let stringNumber = "";
let canEnter = true;

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

// Pressing equal button
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
    display.textContent = substract(...numberArray);
    console.log(canEnter);
  }

  canEnter = false;
});

// Pressing number buttons
if (canEnter) {
  nums.forEach((num) =>
    num.addEventListener("click", function () {
      display.textContent += num.textContent;
      stringNumber += num.textContent;
      console.log(canEnter);
    })
  );
}

// Pressing math operators buttons
const operators = document.querySelectorAll(".operator");

if (canEnter) {
  operators.forEach((operator) => {
    operator.addEventListener("click", function () {
      display.textContent += operator.textContent;
      numberArray.push(stringNumber);
      stringNumber = "";
    });
  });
}

// Clear display
const clearDisplay = function () {
  display.textContent = "";
  stringNumber = "";
  canEnter = true;

  for (let i = 0; i <= numberArray.length; i++) {
    numberArray.pop();
  }
};

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearDisplay);
