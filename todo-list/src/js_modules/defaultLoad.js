const createElement = function (element, parent, elClass) {
  const el = document.createElement(element);
  el.classList.add(elClass);
  parent.append(el);
};

const defaultLoad = function () {
  const container = document.querySelector(".container");

  createElement("div", container, "projects");
  const projects = document.querySelector(".projects");

  createElement("div", container, "todos");
  const todos = document.querySelector(".todos");

  return { container, projects, todos };
};

export { defaultLoad };
