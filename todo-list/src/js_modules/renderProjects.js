const projectsLibrary = [
  {
    title: "Simple project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quo unde quasi delectus autem amet cumque praesentium tenetur molestiae soluta nihil consequuntur ipsum modi eveniet expedita doloremque, illum repellendus suscipit.",
    author: "Roman",
    priority: "Low",
  },
];

const renderProjects = function (parent) {
  parent.innerHTML = "";
  projectsLibrary.forEach((obj) => {
    const project = document.createElement("div");
    project.classList.add("project");
    project.innerHTML = `<span class="project-title">${obj.title}</span><span>${obj.desc}</span><div class="project-info"><span class="project-author">Added by ${obj.author}</span><span class="project-priority">${obj.priority} priority</span></div><div class="close">×</div>
    `;
    parent.append(project);
  });
};

export { projectsLibrary, renderProjects };
