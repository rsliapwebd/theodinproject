"use strict";

let library = [];

const Book = function (title, author, numPages, readStatus = "not read") {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readStatus = readStatus;
};
