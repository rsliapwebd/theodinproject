"use strict";

const libraryContainer = document.querySelector(".library-container");
const bookForm = document.querySelector(".book-form");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const numPages = document.querySelector(".num-pages");
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
  clearInputs();
  addBooksToDisplay();
  bookRemove();
});

// Create and add books from library
function addBooksToDisplay() {
  libraryContainer.innerHTML = "";
  library.forEach((book) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <h3>Title: ${book.title}</h3>
    <h4>Author: ${book.author}</h4>
    <h4>Pages: ${book.numPages}</h4>
    <h4 class='readStatus'>Status: ${
      book.readSelect === "read" ? "Read" : "Not read"
    }</h4>
    <button class='btn btn-remove'>Remove</button>
    `;
    div.classList.add("book");
    libraryContainer.appendChild(div);
  });
}

// Deleting books from a library
function bookRemove() {
  const btnsRemove = document.querySelectorAll(".btn-remove");
  btnsRemove.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      const ancestor = e.target;
      ancestor.closest(".book").remove();
    })
  );
}
