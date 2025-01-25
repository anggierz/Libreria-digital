//To use an interface across different modules in a TypeScript project,
//  you can export it from one module and import it into another

import { LogCreacion } from "../utils/decorators";

//This allows interfaces to be used across various parts of your project without the need to redefine them.

enum Genre {
    Fiction,
    NonFiction,
    Mystery,
    SciFi,
    Biography,
    Technology
}

interface IBook {
    id: number,
    title: string,
    author: string,
    publicationYear: number,
    genre: Genre,
    copiesAvailable: number
}

@LogCreacion
class Book implements IBook {
    public id: number;
    public title: string;
    public author: string;
    public publicationYear: number;
    public genre: Genre;
    public copiesAvailable: number;

    constructor(title: string, author: string, publicationYear: number, genre: Genre, copiesAvailable: number) {
        this.id = -1; //El id será asignado en bookService.ts
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.genre = genre;
        this.copiesAvailable = copiesAvailable;
    }
    
}

export { Genre, Book};