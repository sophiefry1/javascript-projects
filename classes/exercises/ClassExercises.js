const { percentageCoolEmployees } = require("../../unit-testing/studio");

// Define your Book class here:
class Book {
  constructor(
    title,
    author,
    copyright,
    isbn,
    pages,
    timesCheckedOut,
    discarded
  ) {
    this.title = title;
    this.author = author;
    this.copyright = copyright;
    this.isbn = isbn;
    this.pages = pages;
    this.timesCheckedOut = timesCheckedOut;
    this.discarded = discarded;
  }
  checkout(uses = 1) {
    this.timesCheckedOut += uses;
  }

}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(
      tite,
      author,
      copyright,
      isbn,
      pages,
      timesCheckedOut,
      discarded,
    ){ super (tite,
        author,
        copyright,
        isbn,
        pages,
        timesCheckedOut,
        discarded,);
  
    }
    dispose(currentYear){
        if (currentYear-this.copyright > 5) {
           this.discarded = 'Yes';
  }
// Declare the objects for exercises 2 and 3 here:
// Code exercises 4 & 5 here
