"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryController = void 0;
class LibraryController {
    constructor() {
        this.loans = [];
        this.books = [];
        this.user = [];
    }
    loanBook(loan) {
        //First, we search that the bookId and userId does exist and that the book has copies available
        const bookFound = this.books.find((book) => book.id === loan.bookId && book.copiesAvailable > 0);
        const userFound = this.user.find((user) => user.id === loan.userId);
        if (bookFound && userFound) {
            this.processLoanBook(loan);
        }
        else {
            console.log(`Sorry, book with id ${loan.bookId} or user with id ${loan.userId} do not exist`);
        }
    }
    processLoanBook(loan) {
        this.loans.push(loan);
        console.log("Loan processed!" + JSON.stringify(loan));
    }
}
exports.LibraryController = LibraryController;
