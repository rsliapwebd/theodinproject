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
const Book = function (title, author, numPages) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readStatus = "not read";
};

// To create book from a form
const createBook = function () {
  const book = new Book(title.value, author.value, numPages.value);
  library.push(book);
};

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (title.value === "" || author.value === "" || numPages.value === "") {
    alert("Fill the book form, please.");
  } else {
    createBook();
    console.log(library);
  }
});
