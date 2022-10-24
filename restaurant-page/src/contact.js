const textContact = function () {
  const html = document.createElement("div");
  html.innerHTML = `
  <h2>Contact</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nesciunt aperiam repellendus dolor maiores quam? Impedit perspiciatis minima, dignissimos ab labore voluptatum odit assumenda porro aliquid dolores omnis quod facere sapiente sit quasi nostrum ea, excepturi eum, fuga officiis corrupti error. Accusamus sit ut, quam consequatur sint excepturi. Voluptatum, iure?</p>
  <p>Address: Main St., 7/11</p>
  <p>Phone: + 123 45 6789011</p>
  <p>Email: restaurant@home.com</p>
  `;
  const textContainer = document.querySelector(".text-container");
  textContainer.appendChild(html);
};

export { textContact };
