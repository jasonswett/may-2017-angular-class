var Book = (function () {
    function Book(title, yearPublished) {
        this.title = title;
        this.yearPublished = yearPublished;
    }
    return Book;
}());
var Author = (function () {
    function Author(name) {
        this.name = name;
        this.books = [];
    }
    Author.prototype.addBook = function (book) {
        this.books.push(book);
    };
    return Author;
}());
var shortHistory = new Book('A Short History of Nearly Everything', 2003);
var walk = new Book('A Walk in the Woods', 1998);
var billBryson = new Author('Bill Bryson');
billBryson.addBook(shortHistory);
billBryson.addBook(walk);
billBryson.books.forEach(function (book) {
    document.write(book.title + ', ' + book.yearPublished);
    document.write('<br>');
});
