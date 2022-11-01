import "./style.css";

import { htmlLoad } from "./js_modules/htmlLoad.js";
import { Project } from "./js_modules/projectClass.js";
import {
  projectsLibrary,
  renderProjects,
} from "./js_modules/renderProjects.js";
import { hiddenToggler } from "./js_modules/hiddenToggler.js";

// Loading app
const firstLoad = htmlLoad();
renderProjects(firstLoad.projectsCont);

firstLoad.projectsBtn.addEventListener("click", function () {
  hiddenToggler(firstLoad);
});
