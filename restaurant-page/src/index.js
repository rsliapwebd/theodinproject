import { defaultLoad } from "./defaultLoad";
import { textHome } from "./home";
import { textMenu } from "./menu";
import { textContact } from "./contact";
import { clear } from "./clear";

const load = defaultLoad();
textHome();

load.tabHome.addEventListener("click", function () {
  clear();
  textHome();
});
load.tabMenu.addEventListener("click", function () {
  clear();
  textMenu();
});
load.tabContact.addEventListener("click", function () {
  clear();
  textContact();
});
