"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Para testing
const bookController_1 = require("./controllers/bookController");
const userController_1 = require("./controllers/userController");
const bookManager = new bookController_1.BookController();
const userManager = new userController_1.UserController();
//#region Definición de los objetos Book para pruebas de la 1 a la 5. Modificalo a tu gusto
const bookTest1 = {
    title: "Juego de Tronos",
    author: "George R. R. Martin",
    publicationYear: 1997,
    genre: "Sci-Fi",
    copiesAvailable: 1400,
};
const bookTest1_Updated = {
    title: "Juego de Tronos",
    author: "George R. R. Martin",
    publicationYear: 1997,
    genre: "Sci-Fi update",
    copiesAvailable: 54,
};
const bookTest2 = {
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
    genre: "Sci-Fi",
    copiesAvailable: 25,
};
//#endregion
//#region  Definición de los objetos User para pruebas de la 6 a la 10. Modificalo a tu gusto
const userTest1 = {
    name: "Anggie",
    email: "anggie@test.com",
    birthDate: new Date("1999-10-30"),
};
const userTest1_updated = {
    name: "Anggie",
    email: "anggie_otroemail@test.com",
    birthDate: new Date("1999-10-30"),
};
const userTest2 = {
    name: "John",
    email: "john@test.com",
    birthDate: new Date("1985-06-01"),
};
//#endregion
let userChoice = 0;
const readLineSync = require("readline-sync");
while (1) {
    console.log("Bienvenido a la aplicación");
    console.log("   1. Get Books");
    console.log("   2. Get Book By Id");
    console.log("   3. Add Book");
    console.log("   4. Update Book");
    console.log("   5. Delete Book");
    console.log("   6. Get Users");
    console.log("   7. Get User By Id");
    console.log("   8. Add User");
    console.log("   9. Update User");
    console.log("   10. Delete User");
    do {
        userChoice = parseInt(readLineSync.question("Escoge un número entre 1 y 10: "));
    } while (userChoice < 1 || userChoice > 10);
    switch (userChoice) {
        case 1:
            let books = bookManager.getBooks();
            console.log(JSON.stringify(books));
            break;
        case 2:
            let output = bookManager.getBookById(2);
            console.log(JSON.stringify(output));
            break;
        case 3:
            let bookCreated1 = bookManager.addBook(bookTest1);
            let bookCreated2 = bookManager.addBook(bookTest2);
            console.log(JSON.stringify(bookCreated1));
            console.log(JSON.stringify(bookCreated2));
            break;
        case 4:
            let outputUpdateBook = bookManager.updateBook(1, bookTest1_Updated);
            console.log(JSON.stringify(outputUpdateBook));
            break;
        case 5:
            console.log(bookManager.deleteBook(2));
            break;
        case 6:
            let users = userManager.getUsers();
            console.log(JSON.stringify(users));
            break;
        case 7:
            let outputGetUserById = userManager.getUserById(2);
            console.log(JSON.stringify(outputGetUserById));
            break;
        case 8:
            let userCreated1 = userManager.addUser(userTest1);
            let userCreated2 = userManager.addUser(userTest2);
            console.log(JSON.stringify(userCreated1));
            console.log(JSON.stringify(userCreated2));
            break;
        case 9:
            let outputUpdateUser = userManager.updateUser(1, userTest1_updated);
            console.log(JSON.stringify(outputUpdateUser));
            break;
        case 10:
            console.log(userManager.deleteUser(2));
            break;
        default:
            console.log("Escoge una opción válida");
            break;
    }
}
