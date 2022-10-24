const content = document.querySelector("#content");

const createElement = function (parent, element, elClass) {
  const newElement = document.createElement(element);
  newElement.classList.add(elClass);
  parent.appendChild(newElement);
};

const defaultLoad = function () {
  // Title
  createElement(content, "h1", "main-title");
  const h1 = document.querySelector("h1");
  h1.textContent = "Restaurant Page";
  // Container
  createElement(content, "div", "container");
  const container = document.querySelector(".container");
  // Tabs
  createElement(container, "div", "tabs");
  const tabs = document.querySelector(".tabs");
  // Individual tab
  createElement(tabs, "div", "tab-home");
  const tabHome = document.querySelector(".tab-home");
  tabHome.textContent = "Home";
  createElement(tabs, "div", "tab-menu");
  const tabMenu = document.querySelector(".tab-menu");
  tabMenu.textContent = "Menu";
  createElement(tabs, "div", "tab-contact");
  const tabContact = document.querySelector(".tab-contact");
  tabContact.textContent = "Contact";
  // Text container
  createElement(container, "div", "text-container");

  return { tabs, tabHome, tabMenu, tabContact };
};

export { defaultLoad };
