import { LogCreacion } from "../utils/decorators";

export interface ILibrary {
    bookId: number,
    userId: number,
    loanDate: Date,
    returnDate: Date | null
}

@LogCreacion
class Library implements ILibrary{
    public bookId: number;
    public userId: number;
    public loanDate: Date;
    public returnDate: Date | null;

    constructor(bookId: number, userId: number, loanDate: Date) {
        this.bookId = bookId,
        this.userId = userId,
        this.loanDate = loanDate,
        this.returnDate = null;
    }

    public registerReturnDate(returnDate: Date) : void {
        this.returnDate = returnDate;
    }


}

export { Library }