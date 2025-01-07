import { LogCreacion } from "../utils/decorators"
interface IUser {
    id: number,
    name: string,
    email: string,
    birthDate: Date
}

@LogCreacion
class User implements User {
    public id: number;
    public name: string;
    public email: string;
    public birthDate: Date;

    constructor(id: number, name: string, email: string, birthDate: Date) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
    }
}


export { IUser, User };
