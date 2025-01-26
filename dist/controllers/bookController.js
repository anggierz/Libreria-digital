"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
//Services are where the business logic is located
class BookController {
    constructor() {
        this.books = [];
        //#endregion
    }
    getBooks() {
        return this.books;
    }
    getBookById(id) {
        const book = this.books.find(book => book.id === id);
        if (!book)
            return `Book with id ${id} does not exist`;
        return book;
    }
    addBook(book) {
        book.id = this.books.length + 1;
        this.books.push(book);
        return book;
    }
    updateBook(id, bookToUpdate) {
        let bookIndex = this.findBookIndexById(id);
        if (bookIndex !== -1) {
            this.books[bookIndex] = Object.assign(Object.assign({}, this.books[bookIndex]), bookToUpdate);
            return this.books[bookIndex];
        }
        return "Book not found";
    }
    deleteBook(id) {
        let bookIndex = this.findBookIndexById(id);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            return "Book deleted successfully";
        }
        return "Book not found";
    }
    //#region Book Private methods
    findBookIndexById(id) {
        let index = this.books.findIndex(book => book.id === id);
        return index;
    }
}
exports.BookController = BookController;
