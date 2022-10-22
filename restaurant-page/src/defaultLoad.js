const body = document.querySelector("body");

const createElement = function (parent, element, elClass) {
  const newElement = document.createElement(element);
  newElement.classList.add(elClass);
  parent.appendChild(newElement);
};

const defaultLoad = function () {
  createElement(body, "div", "container");
  const container = document.querySelector(".container");
  createElement(container, "div", "tabs");
  const tabs = document.querySelector(".tabs");
  createElement(tabs, "div", "tab");
  createElement(container, "div", "text-container");
};
