const createElement = function (element, parent, firstClass) {
  const el = document.createElement(element);
  el.classList.add(firstClass);
  parent.append(el);
};

const container = document.querySelector(".container");

const htmlLoad = function () {
  // Projects
  createElement("div", container, "projects");
  const projects = document.querySelector(".projects");
  // Projects container
  createElement("div", projects, "projects-container");
  const projectsCont = document.querySelector(".projects-container");
  createElement("button", projects, "projects-btn");
  const projectsBtn = document.querySelector(".projects-btn");
  projectsBtn.classList.add("btn");
  projectsBtn.textContent = "Add project";
  // Form rendering
  createElement("form", projects, "project-form");
  const form = document.querySelector("form");
  form.classList.add("hidden");
  form.innerHTML = `
  <div class="form-group">
    <label for="title">Project Title</label>
    <input type="text" id="title" />
  </div>
  <div class="form-group">
    <label for="desc">Description</label>
    <input type="text" id="desc" />
  </div>
  <div class="form-group">
    <label for="author">Author</label>
    <input type="text" id="author" />
  </div>
  <div class="form-group">
    <label for="priority">Priority</label>
    <input type="text" id="priority" />
  </div>
  <button class="btn form-btn">Submit</button>
  `;
  const formBtn = document.querySelector(".form-btn");
  // Form inputs
  const title = document.querySelector("#title");
  const desc = document.querySelector("#desc");
  const author = document.querySelector("#author");
  const priority = document.querySelector("#priority");
  // Todos
  createElement("div", container, "todos");
  const todos = document.querySelector(".todos");

  return {
    projects,
    projectsCont,
    projectsBtn,
    form,
    formBtn,
    title,
    desc,
    author,
    priority,
    todos,
  };
};

export { container, htmlLoad };
