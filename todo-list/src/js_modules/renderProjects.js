import { addTodo, renderTodos } from "./addTodo.js";

const projectsLibrary = [
  {
    title: "Simple project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quo unde quasi delectus autem amet cumque praesentium tenetur molestiae soluta nihil consequuntur ipsum modi eveniet expedita doloremque, illum repellendus suscipit.",
    author: "Roman",
    priority: "Low",
    todos: "Test",
  },
];

const renderProjects = function (parent) {
  parent.innerHTML = "";
  projectsLibrary.forEach((obj) => {
    const project = document.createElement("div");
    project.classList.add("project");
    project.innerHTML = `<span class="project-title">${obj.title}</span><div class="project-info"><span class="project-author">Added by ${obj.author}</span><span class="project-priority">${obj.priority} priority</span></div><div class="close">×</div>
    `;
    parent.append(project);
  });
};

const removeProject = function (arr) {
  const closeBtns = document.querySelectorAll(".close");
  closeBtns.forEach((btn, index) => {
    btn.addEventListener("click", function (e) {
      if (index !== 0) {
        e.target.closest(".project").remove();
        arr.splice(index, 1);
        console.log(index, arr);
      }
    });
  });
};

const chooseActiveAndRenderTodos = function (parent, array) {
  const allProjects = document.querySelectorAll(".project");
  allProjects.forEach((project, index, arr) => {
    project.addEventListener("click", function (e) {
      if (!project.classList.contains("active")) {
        parent.innerHTML = "";
        arr.forEach((item) => item.classList.remove("active"));
        // Render desccription
        const newEl = document.createElement("div");
        newEl.classList.add("description");
        newEl.innerHTML = `
        <h3>Project description:</h3>
        <p>${array[index].desc}</p>
        <div class="todos-inner></div>
        <div class="todo-info">
          <input type="text" class="todo-input">
          <button class="btn todo-btn">Add Todo</button>
        </div>
        `;
        parent.append(newEl);
        project.classList.add("active");

        const todosInner = document.querySelector(".todos-inner");
        addTodo(projectsLibrary[index].todos, todosInner);
      }
    });
  });
};

export {
  projectsLibrary,
  renderProjects,
  removeProject,
  chooseActiveAndRenderTodos,
};
