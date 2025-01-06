//Para testing
import { BookController } from "./controllers/bookController";
import { UserController } from "./controllers/userController";
import { LibraryController } from "./controllers/libraryController";
import { IBook, Book, Genre } from "./models/book";
import { IUser, User } from "./models/user";
import { Library } from "./models/library";

const bookManager = new BookController();
const userManager = new UserController();
const libraryManager = new LibraryController();


//#region Definición de los objetos Book para pruebas de la 1 a la 5. Modificalo a tu gusto


const bookTest1 = new Book(1, "Juego de Tronos", "George R. R. Martin", 1997, Genre.SciFi, 25);

const bookTest1_Updated = new Book(1, "Juego de Tronos", "George R. R. Martin", 1997, Genre.SciFi, 37);

const bookTest2 = new Book(2, "1984", "George Orwell", 1949, Genre.SciFi, 76);

//#endregion

//#region  Definición de los objetos User para pruebas de la 6 a la 10. Modificalo a tu gusto

// const userTest1: User = {
//   name: "Anggie",
//   email: "anggie@test.com",
//   birthDate: new Date("1999-10-30"),
// };

// const userTest1_updated: User = {
//   name: "Anggie",
//   email: "anggie_otroemail@test.com",
//   birthDate: new Date("1999-10-30"),
// };

// const userTest2: User = {
//   name: "John",
//   email: "john@test.com",
//   birthDate: new Date("1985-06-01"),
// };

//#endregion

let userChoice: number = 0;
const readLineSync = require("readline-sync");

// while (1) {
//   console.log("Bienvenido a la aplicación");
//   console.log("   1. Get Books");
//   console.log("   2. Get Book By Id");
//   console.log("   3. Add Book");
//   console.log("   4. Update Book");
//   console.log("   5. Delete Book");
//   console.log("   6. Get Users");
//   console.log("   7. Get User By Id");
//   console.log("   8. Add User");
//   console.log("   9. Update User");
//   console.log("   10. Delete User");

//   do {
//     userChoice = parseInt(
//       readLineSync.question("Escoge un número entre 1 y 10: ")
//     );
//   } while (userChoice < 1 || userChoice > 10);

//   switch (userChoice) {
//     case 1:
//       let books = bookManager.getBooks();
//       console.log(JSON.stringify(books));
//       break;
//     case 2:
//       let output = bookManager.getBookById(2);
//       console.log(JSON.stringify(output));
//       break;
//     case 3:
//       let bookCreated1 = bookManager.addBook(bookTest1);
//       let bookCreated2 = bookManager.addBook(bookTest2);
//       console.log(JSON.stringify(bookCreated1));
//       console.log(JSON.stringify(bookCreated2));
//       break;
//     case 4:
//       let outputUpdateBook = bookManager.updateBook(1, bookTest1_Updated);
//       console.log(JSON.stringify(outputUpdateBook));
//       break;
//     case 5:
//       console.log(bookManager.deleteBook(2));
//       break;
//     case 6:
//       let users = userManager.getUsers();
//       console.log(JSON.stringify(users));
//       break;
//     case 7:
//       let outputGetUserById = userManager.getUserById(2);
//       console.log(JSON.stringify(outputGetUserById));
//       break;
    // case 8:
    //   let userCreated1 = userManager.addUser(userTest1);
    //   let userCreated2 = userManager.addUser(userTest2);
    //   console.log(JSON.stringify(userCreated1));
    //   console.log(JSON.stringify(userCreated2));
    //   break;
    // case 9:
    //   let outputUpdateUser = userManager.updateUser(1, userTest1_updated);
    //   console.log(JSON.stringify(outputUpdateUser));
    //   break;
    // case 10:
    //   console.log(userManager.deleteUser(2));
    //   break;
    // default:
    //   console.log("Escoge una opción válida");
    //   break;
//   }
// }
