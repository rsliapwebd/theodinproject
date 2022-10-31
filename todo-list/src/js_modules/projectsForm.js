const projectsForm = function (parent) {
  const form = document.createElement("form");
  form.classList.add("project-form");
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
    <label for="month">Due month</label>
    <input type="text" id="month" />
  </div>
  <div class="form-group">
    <label for="priority">Priority</label>
    <input type="text" id="priority" />
  </div>
  <button class="btn form-btn">Submit</button>
  `;
  parent.append(form);
};

export { projectsForm };
