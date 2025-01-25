import { Library } from "../models/library";
import { BookController } from "./bookController";
import { UserController } from "./userController";

//Services are where the business logic is located
class LibraryController {
  private loans: Library[] = [];
  private bookController: BookController;
  private userController: UserController;

  constructor(bookController: BookController, userController: UserController) {
    this.bookController = bookController;
    this.userController = userController;
  }

  public loanBook(bookId: number, userId: number): string {
    const user = this.userController.getUserById(userId);
    const book = this.bookController.getBookById(bookId);

    //Verify that bookId and userId exist
    if (typeof user == "string") return user;
    if (typeof book == "string") return book;

    //Verify that there are copies available for the book that's being loaned
    if (book.copiesAvailable <= 0)
      return `No copies available for book with title: ${book.title}`;

    const loan = new Library(bookId, userId, new Date());
    this.loans.push(loan);
    book.copiesAvailable -= 1;

    return `Book with title: ${book.title} loaned. Date of Loan: ${loan.loanDate}`;
  }

  public returnBook(bookId: number, userId: number): string {
    const loan = this.loans.find((loan) => loan.bookId == bookId && loan.userId == userId && loan.returnDate == null);
    const book = this.bookController.getBookById(bookId);

    //Verify that the loan is valid for return
    if (!loan) return `No loans found`;

    //Verify that the book exists
    if (typeof book == "string") return book;

    loan?.registerReturnDate(new Date());
    book.copiesAvailable += 1;
    return `Book with title: ${book.title} returned. Date of Return: ${loan?.returnDate}`;
  }

}

export { LibraryController };
