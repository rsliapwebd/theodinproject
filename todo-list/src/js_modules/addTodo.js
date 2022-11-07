const addTodo = function (parArr) {
  const todoInput = document.querySelector(".todo-input");
  const todoBtn = document.querySelector(".todo-btn");
  todoBtn.addEventListener("click", function () {
    parArr.push(todoInput.value);
    todoInput.value = "";
    renderTodos(parArr);
  });
  renderTodos(parArr);
};

function renderTodos(arr) {
  const todosInner = document.querySelector(".todos-inner");
  todosInner.innerHTML = "";
  arr.forEach((todo) => {
    const todoEl = document.createElement("div");
    todoEl.classList.add("todo");
    todoEl.innerHTML = `
        <h3>${todo}</h3>
      `;
    todosInner.append(todoEl);
  });
}

export { addTodo };
