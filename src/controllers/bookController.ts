import { Book } from "../models/book";

//Services are where the business logic is located
class BookController {
    private books: Book[] = [];

    public getBooks(): Book[] {
        return this.books;
    }

    public getBookById(id: number): (Book | string) {
        const book = this.books.find(book => book.id === id);

        if (!book)
            return `Book with id ${id} does not exist`

        return book;
    }

    public addBook(book: Book): Book {
        book.id = this.books.length + 1;
        this.books.push(book);
        return book;
    }

    public updateBook(id: number, bookToUpdate: Partial<Book>): Book | string {

        let bookIndex = this.findBookIndexById(id);

        if (bookIndex !== -1) {
            this.books[bookIndex] = { ...this.books[bookIndex], ...bookToUpdate };
            return this.books[bookIndex];
        }
        return "Book not found";
    }

    public deleteBook(id: number): string {
        let bookIndex = this.findBookIndexById(id);

        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            return "Book deleted successfully";
        }
        return "Book not found";
    }
    //#region Book Private methods

    private findBookIndexById(id: number): number {
        let index : number = this.books.findIndex(book => book.id === id)

        return index;
    }

    //#endregion

}

export { BookController };