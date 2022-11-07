const addTodo = function (parArr, parent) {
  const todoInput = document.querySelector(".todo-input");
  const todoBtn = document.querySelector(".todo-btn");
  todoBtn.addEventListener("click", function () {
    parArr.push(todoInput.value);
    parent.innerHTML = "";
    parArr.forEach((todo) => {
      const todoEl = document.createElement("div");
      todoEl.classList.add("todo");
      todoEl.innerHTML = `
        <h3>${todo}</h3>
      `;
      parent.append(todoEl);
    });
    console.log(parArr);
  });
};

export { addTodo };
