"use strict";

const libraryContainer = document.querySelector(".library-container");
const bookForm = document.querySelector(".book-form");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const numPages = document.querySelector(".num-pages");
const readSelect = document.querySelector(".readSelect");
const addBtn = document.querySelector(".add-book");

// FUNCTIONALITY

// Array with created books
let library = [];

// Book constructor
const Book = function (title, author, numPages, readSelect) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readSelect = readSelect;
};

// To create book from a form
const createBook = function (inputs) {
  const book = new Book(...inputs);
  library.push(book);
};

// Clear input fields
const clearInputs = function () {
  title.value = author.value = numPages.value = "";
};

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const inputs = [title.value, author.value, numPages.value, read.value];
  createBook(inputs);
  console.log(library);
  clearInputs();
  addBooksToDisplay();
});

// Create and add books from library
function addBooksToDisplay() {
  libraryContainer.innerHTML = "";
  library.forEach((book) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <h3>${book.title}</h3>
    <h4>${book.author}</h4>
    <h5>Pages: ${book.numPages}</h5>
    <div class='btn-container'>
    <button class='btn ${book.readSelect}'>${
      book.readSelect === "read" ? "Read" : "Not read"
    }</button>
    <button class='btn'>Remove</button>
    </div>
    `;
    div.classList.add("book");
    libraryContainer.appendChild(div);
  });
}
