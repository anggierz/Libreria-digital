import { LogCreacion } from "../utils/decorators"
interface IUser {
    id: number,
    name: string,
    email: string,
    birthDate: Date
}

@LogCreacion
class User implements IUser {
    public id: number;
    public name: string;
    public email: string;
    public birthDate: Date;

    constructor(name: string, email: string, birthDate: Date) {
        this.id = -1; //El id será asignado en userController.ts
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
    }

}

export { User };
