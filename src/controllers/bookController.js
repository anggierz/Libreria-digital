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
            return `Book with ${id} does not exist`;
        return book;
    }
    //ADD BOOKS: Se le pasa un libro y este se añade a la lista de la clase Book
    addBook(book) {
        book.id = this.books.length + 1;
        this.books.push(book);
        console.log("Book added successfully!");
    }
    updateBook(id, bookToUpdate) {
    }
}
exports.BookController = BookController;
