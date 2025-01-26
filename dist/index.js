"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Para testing
const bookController_1 = require("./controllers/bookController");
const userController_1 = require("./controllers/userController");
const libraryController_1 = require("./controllers/libraryController");
const book_1 = require("./models/book");
const user_1 = require("./models/user");
//#region Initialize controllers
const bookController = new bookController_1.BookController();
const userController = new userController_1.UserController();
const libraryController = new libraryController_1.LibraryController(bookController, userController);
//#endregion
//#region Add Books
const book1 = new book_1.Book("1984", "George Orwell", 1949, book_1.Genre.SciFi, 20);
const book2 = new book_1.Book("Aprendiendo JavaScript: desde cero hasta ECMAScript 6", "Carlos Azaustre", 2016, book_1.Genre.Technology, 10);
const book3 = new book_1.Book("Clean Code", "Robert C. Martin", 2008, book_1.Genre.Technology, 15);
const book4 = new book_1.Book("Maria Antonieta", "Stefan Zweig", 2012, book_1.Genre.Biography, 0);
const book5 = new book_1.Book("Hábitos atómicos", "James Clear", 2020, book_1.Genre.NonFiction, 35);
const booksToCreate = [book1, book2, book3, book4, book5];
booksToCreate.forEach(book => {
    bookController.addBook(book);
});
//#endregion
//#region Get Books
console.log(bookController.getBooks());
//#endregion
//#region Update Book
const bookToUpdate = bookController.getBookById(2);
if (typeof bookToUpdate !== "string") {
    bookToUpdate.title = "Aprendiendo JS";
    bookToUpdate.publicationYear = 2017;
    bookController.updateBook(2, bookToUpdate);
}
const bookAfterUpdate = bookController.getBookById(2);
console.log(JSON.stringify(bookAfterUpdate));
//#endregion
//#region Delete Book
console.log(bookController.deleteBook(1));
console.log(bookController.deleteBook(7));
console.log(bookController.getBooks());
//#endregion
//#region Add Users
const user1 = new user_1.User("John Doe", "johndoe@test.com", new Date("2000-11-01"));
const user2 = new user_1.User("Anggie Rizo", "anggie@gmail.com", new Date("1999-10-30"));
const user3 = new user_1.User("John Doe Duplicated", "johndoe@test.com", new Date("1998-02-02")); //This user won't be added because it has a duplicated email
const usersToCreate = [user1, user2, user3];
usersToCreate.forEach(user => {
    userController.addUser(user);
});
//#endregion
//#region Get Users
console.log(userController.getUsers());
//#endregion
//#region Delete User
console.log(userController.deleteUser(4));
console.log(userController.deleteUser(1));
console.log(userController.getUsers());
//#endregion
//#region Loan Book with userId or BookId that does not exist
console.log(libraryController.loanBook(2, 1));
//#endregion
//#region Loan Book with userId and bookId that exists
console.log(libraryController.loanBook(3, 2));
//Get copies available of the book loaned to check that it has decreased
console.log(bookController.getBookById(3));
//#endregion
//#region Loan Book with userId and bookId that exists but there are no copies available for the book
console.log(libraryController.loanBook(4, 2));
//#endregion
//#region Return Book for a Loan that exists
console.log(libraryController.returnBook(3, 2));
//Get copies available of the book returned to check that it has increased
console.log(bookController.getBookById(3));
//#endregion
//#region Return Book for a Loan that does not exist or a loan that has ended (because the book has been returned)
console.log(libraryController.returnBook(3, 2));
//#endregion
