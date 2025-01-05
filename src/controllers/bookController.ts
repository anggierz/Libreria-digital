import { Book } from "../models/book";

export class BookController {
    private books: Book[] = [];

    //GET Books: Sin pasarle ningún argumento, lista todos los libros y devuelve una lista de la clase Book
    getBooks(): Book[] {
        return this.books;
    }

    //Buscar un libro por id, si existe, se devuelve el libro, si no existe, se devuelve un mensaje
    getBookById(id: number): (Book | string) {
        const book = this.books.find(book => book.id === id);

        if (!book)
            return `Book with id ${id} does not exist`

        return book;
    }

    //ADD BOOKS: Se le pasa un libro y este se añade a la lista de la clase Book
    addBook(book: Book): Book {
        book.id = this.books.length + 1;
        this.books.push(book);
        return book;
    }

    updateBook(id: number, bookToUpdate: Partial<Book>): Book | string {

        let bookIndex = this.books.findIndex(book => book.id === id)

        if (bookIndex !== -1) {
            this.books[bookIndex] = { ...this.books[bookIndex], ...bookToUpdate };
            return this.books[bookIndex];
        }
        return "Book not found";
    }

    deleteBook(id: number): string {
        let bookIndex = this.books.findIndex(book => book.id === id)

        if (bookIndex !== -1) {
            this.books.splice(bookIndex);
            return "Book deleted successfully";
        }
        return "Book not found";
    }

}