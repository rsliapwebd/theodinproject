const textMenu = function () {
  const html = document.createElement("div");
  html.innerHTML = `
  <h2>Menu</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nesciunt aperiam repellendus dolor maiores quam? Impedit perspiciatis minima, dignissimos ab labore voluptatum odit assumenda porro aliquid dolores omnis quod facere sapiente sit quasi nostrum ea, excepturi eum, fuga officiis corrupti error. Accusamus sit ut, quam consequatur sint excepturi. Voluptatum, iure?</p>

  <ul>
  <li><h3>Position One</h3></li>
  <li><h3>Position Two</h3></li>
  <li><h3>Position Three</h3></li>
  <li><h3>Position Four</h3></li>
  <li><h3>Position Five</h3></li>
  </ul>
  `;
  const textContainer = document.querySelector(".text-container");
  textContainer.appendChild(html);
};

export { textMenu };
