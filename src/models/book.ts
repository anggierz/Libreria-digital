//To use an interface across different modules in a TypeScript project,
//  you can export it from one module and import it into another

//This allows interfaces to be used across various parts of your project without the need to redefine them.

export interface Book {
    id?: number,
    title: string,
    author: string,
    publicationYear: number,
    genre: string,
    copiesAvailable: number
}