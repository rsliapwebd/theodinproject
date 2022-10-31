const createElement = function (element, parent, firstClass) {
  const el = document.createElement(element);
  el.classList.add(firstClass);
  parent.append(el);
};

const container = document.querySelector(".container");

const htmlLoad = function () {
  createElement("div", container, "projects");
  const projects = document.querySelector(".projects");
  createElement("button", projects, "projects-btn");
  const projectsBtn = document.querySelector(".projects-btn");
  projectsBtn.classList.add("btn");
  projectsBtn.textContent = "Add project";

  createElement("div", container, "todos");
  const todos = document.querySelector(".todos");
  createElement("button", todos, "todos-btn");
  const todosBtn = document.querySelector(".todos-btn");
  todosBtn.classList.add("btn");
  todosBtn.textContent = "Add Todo";

  return { projects, todos, projectsBtn, todosBtn };
};

export { container, htmlLoad };
