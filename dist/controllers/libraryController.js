"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryController = void 0;
const library_1 = require("../models/library");
//Services are where the business logic is located
class LibraryController {
    constructor(bookController, userController) {
        this.loans = [];
        this.bookController = bookController;
        this.userController = userController;
    }
    loanBook(bookId, userId) {
        const user = this.userController.getUserById(userId);
        const book = this.bookController.getBookById(bookId);
        //Verify that bookId and userId exist
        if (typeof user == "string")
            return user;
        if (typeof book == "string")
            return book;
        //Verify that there are copies available for the book that's being loaned
        if (book.copiesAvailable <= 0)
            return `No copies available for book with title: ${book.title}`;
        const loan = new library_1.Library(bookId, userId, new Date());
        this.loans.push(loan);
        book.copiesAvailable -= 1;
        return `Book with title: ${book.title} loaned. Date of Loan: ${loan.loanDate}`;
    }
    returnBook(bookId, userId) {
        const loan = this.loans.find((loan) => loan.bookId == bookId && loan.userId == userId && loan.returnDate == null);
        const book = this.bookController.getBookById(bookId);
        //Verify that the loan is valid for return
        if (!loan)
            return `No loans found`;
        //Verify that the book exists
        if (typeof book == "string")
            return book;
        loan === null || loan === void 0 ? void 0 : loan.registerReturnDate(new Date());
        book.copiesAvailable += 1;
        return `Book with title: ${book.title} returned. Date of Return: ${loan === null || loan === void 0 ? void 0 : loan.returnDate}`;
    }
}
exports.LibraryController = LibraryController;
