"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
var BookController = /** @class */ (function () {
    function BookController() {
        this.books = [];
    }
    //GET Books: Sin pasarle ningún argumento, lista todos los libros y devuelve una lista de la clase Book
    BookController.prototype.getBooks = function () {
        return this.books;
    };
    //Buscar un libro por id, si existe, se devuelve el libro, si no existe, se devuelve un mensaje
    BookController.prototype.getBookById = function (id) {
        var book = this.books.find(function (book) { return book.id === id; });
        if (!book)
            return "Book with ".concat(id, " does not exist");
        return book;
    };
    //ADD BOOKS: Se le pasa un libro y este se añade a la lista de la clase Book
    BookController.prototype.addBook = function (book) {
        book.id = this.books.length + 1;
        this.books.push(book);
        console.log("Book added successfully!");
    };
    BookController.prototype.updateBook = function (id, bookToUpdate) {
    };
    return BookController;
}());
exports.BookController = BookController;
