"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
class BookController {
    constructor() {
        this.books = [];
    }
    //GET Books: Sin pasarle ningún argumento, lista todos los libros y devuelve una lista de la clase Book
    getBooks() {
        return this.books;
    }
    //Buscar un libro por id, si existe, se devuelve el libro, si no existe, se devuelve un mensaje
    getBookById(id) {
        const book = this.books.find(book => book.id === id);
        if (!book)
            return `Book with id ${id} does not exist`;
        return book;
    }
    //ADD BOOKS: Se le pasa un libro y este se añade a la lista de la clase Book
    addBook(book) {
        book.id = this.books.length + 1;
        this.books.push(book);
        return book;
    }
    updateBook(id, bookToUpdate) {
        let bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.books[bookIndex] = Object.assign(Object.assign({}, this.books[bookIndex]), bookToUpdate);
            return this.books[bookIndex];
        }
        return "Book not found";
    }
    deleteBook(id) {
        let bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex);
            return "Book deleted successfully";
        }
        return "Book not found";
    }
}
exports.BookController = BookController;
