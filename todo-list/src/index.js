import "./style.css";

import { htmlLoad } from "./js_modules/htmlLoad.js";
import { Project } from "./js_modules/projectClass.js";
import { projectsForm } from "./js_modules/projectsForm.js";

const projectsLibrary = [];

// Loading app
const firstLoad = htmlLoad();

firstLoad.projectsBtn.addEventListener("click", function () {
  projectsForm(firstLoad.projects);
  const newProject = new Project();
});
