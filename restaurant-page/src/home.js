const textHome = function () {
  const html = document.createElement("div");
  html.innerHTML = `
  <h2>About Us</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nesciunt aperiam repellendus dolor maiores quam? Impedit perspiciatis minima, dignissimos ab labore voluptatum odit assumenda porro aliquid dolores omnis quod facere sapiente sit quasi nostrum ea, excepturi eum, fuga officiis corrupti error. Accusamus sit ut, quam consequatur sint excepturi. Voluptatum, iure?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam atque recusandae est ratione nisi assumenda. Enim ipsa magni odio error nesciunt at reiciendis? Aperiam quasi praesentium repudiandae autem? Ipsam nobis inventore minus esse aspernatur voluptatem fuga beatae, odit obcaecati sequi perspiciatis perferendis unde temporibus sapiente, incidunt libero ab distinctio!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nesciunt aperiam repellendus dolor maiores quam? Impedit perspiciatis minima, dignissimos ab labore voluptatum odit assumenda porro aliquid dolores omnis quod facere sapiente sit quasi nostrum ea, excepturi eum, fuga officiis corrupti error. Accusamus sit ut, quam consequatur sint excepturi. Voluptatum, iure?</p>
  `;
  const textContainer = document.querySelector(".text-container");
  textContainer.appendChild(html);
};

export { textHome };
