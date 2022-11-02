import "./style.css";

import { htmlLoad } from "./js_modules/htmlLoad.js";
import { createProject } from "./js_modules/projectClass.js";
import {
  projectsLibrary,
  renderProjects,
  removeProject,
} from "./js_modules/renderProjects.js";
import { hiddenToggler } from "./js_modules/hiddenToggler.js";

// Loading app
const firstLoad = htmlLoad();
renderProjects(firstLoad.projectsCont);

// Open new project form
firstLoad.projectsBtn.addEventListener("click", function () {
  hiddenToggler(firstLoad);
});

// Add new project and hide form
firstLoad.formBtn.addEventListener("click", function (e) {
  e.preventDefault();
  createProject(firstLoad, projectsLibrary);
  renderProjects(firstLoad.projectsCont);
  hiddenToggler(firstLoad);
  removeProject(projectsLibrary);
});
