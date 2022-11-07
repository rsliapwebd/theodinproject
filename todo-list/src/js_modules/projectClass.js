class Project {
  constructor(title, desc, author, priority) {
    this.title = title;
    this.desc = desc;
    this.author = author;
    this.priority = priority;
    this.todos = [];
  }
}

const createProject = function (formOptions, object) {
  const newProject = new Project(
    formOptions.title.value,
    formOptions.desc.value,
    formOptions.author.value,
    formOptions.priority.value
  );
  object.push(newProject);
};

export { createProject };
