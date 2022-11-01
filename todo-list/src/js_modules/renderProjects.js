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
    project.innerHTML = `<span class="project-title">${obj.title}</span><span>Description: ${obj.desc}</span><span>Author: ${obj.author}</span><span>Priority: ${obj.priority}</span><div class="close">×</div>
    `;
    parent.append(project);
  });
};

export { projectsLibrary, renderProjects };
