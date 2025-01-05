//Para testing
import { BookController } from "./controllers/bookController";
import { Book } from "./models/book"


const bookManager = new BookController();

const bookTest1 : Book = {
    title: "Juego de Tronos",
    author: "George R. R. Martin",
    publicationYear: 1997,
    genre: "Sci-Fi",
    copiesAvailable: 1400
}

const bookTest1_Updated : Book = {
    title: "Juego de Tronos",
    author: "George R. R. Martin",
    publicationYear: 1997,
    genre: "Sci-Fi update",
    copiesAvailable: 54
}

const bookTest2 : Book = {
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
    genre: "Sci-Fi",
    copiesAvailable: 25
}


let userChoice: number = 0;
const readLineSync = require('readline-sync');

while (1) {
    console.log("Bienvenido a la aplicación");
    console.log("   1. Get Books");
    console.log("   2. Get Book By Id");
    console.log("   3. Add Book");
    console.log("   4. Update Book");
    console.log("   5. Delete Book");

    do {
        userChoice = parseInt(readLineSync.question("Escoge un número entre 1 y 4: "));
    } while (userChoice < 1 || userChoice > 8)

    switch (userChoice) {
        case 1:
            bookManager.getBooks();
            break;
        case 2: 
            bookManager.getBookById(2);
            break;
        case 3:
            bookManager.addBook(bookTest1);
            bookManager.addBook(bookTest2);
            break;
        case 4:
            bookManager.updateBook(1, bookTest1_Updated);
            break;
        case 5:
            bookManager.deleteBook(2);
        default:
            console.log("Escoge una opción válida");
            break;
    }
}
