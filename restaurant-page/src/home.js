const textHome = function () {
  const html = document.createElement("div");
  html.innerHTML = `
  <h2>About Us</h2>
  <img src="../dist/img/team.jpg">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nesciunt aperiam repellendus dolor maiores quam? Impedit perspiciatis minima, dignissimos ab labore voluptatum odit assumenda porro aliquid dolores omnis quod facere sapiente sit quasi nostrum ea, excepturi eum, fuga officiis corrupti error. Accusamus sit ut, quam consequatur sint excepturi. Voluptatum, iure?</p>
  `;
  const textContainer = document.querySelector(".text-container");
  textContainer.appendChild(html);
};

export { textHome };
