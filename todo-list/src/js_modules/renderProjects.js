const projectsLibrary = [
  {
    title: "Simple project",
    desc: "Demo",
    author: "Roman",
    priority: "Low",
  },
];

const renderProjects = function (parent) {
  projectsLibrary.forEach((obj) => {
    const project = document.createElement("div");
    project.classList.add("project");
    project.innerHTML = `<span class="project-title">${obj.title}</span><span>${obj.desc}</span><span>${obj.author}</span><span>${obj.priority}</span>`;
    parent.append(project);
  });
};

export { projectsLibrary, renderProjects };
