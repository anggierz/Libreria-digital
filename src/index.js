"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Para testing
const bookController_1 = require("./controllers/bookController");
const bookManager = new bookController_1.BookController();
let userChoice = 0;
const readLineSync = require('readline-sync');
while (1) {
    console.log("Bienvenido a la aplicación");
    console.log("   1. Get Books");
    console.log("   2. Get Book By Id");
    console.log("   3. Add Book");
    console.log("   3. Update Book");
    do {
        userChoice = parseInt(readLineSync.question("Escoge un número entre 1 y : "));
    } while (userChoice < 1 || userChoice > 0);
    switch (userChoice) {
        case 1:
            bookManager.getBooks();
            break;
        default:
            console.log("Escoge una opción válida");
            break;
    }
}
