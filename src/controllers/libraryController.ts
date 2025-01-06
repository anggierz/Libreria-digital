import { Library } from "../models/library";
import { Book } from "../models/book";
import { User } from "../models/user";


class LibraryController {
    private loans : Library[] = [];
    private books: Book[] = [];
    private user: User[] = [];

    loanBook(loan: Library) : void {
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

    private processLoanBook(loan: Library) : void {

        this.loans.push(loan);
        console.log("Loan processed!" + JSON.stringify(loan));
    }
}

export { LibraryController };