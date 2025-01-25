import { User } from "../models/user";

//Services are where the business logic is located
class UserController {
  private users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | string {
    const user = this.users.find((user) => user.id === id);

    if (!user) return `User with id ${id} does not exist`;

    return user;
  }

  addUser(user: User): User | string {
    let isEmailValidForCreation = this.IsEmailValidForCreation(user.email);

    if (!isEmailValidForCreation) {
      return "Email is duplicated or empty string";
    }

    user.id = this.users.length + 1;
    this.users.push(user);
    return user;
  }

  deleteUser(id: number): string {
    let userIndex = this.findUserIndexById(id);

    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return "User deleted successfully";
    }
    return "User not found";
  }

  //#region User Private methods

  private findUserIndexById(id: number): number {
    let index = this.users.findIndex((user) => user.id === id);

    return index;
  }

  private IsEmailValidForCreation(email: string): boolean {
    let emailValidToContinue = true;

    if (this.IsEmailDuplicated(email) || this.IsEmailEmptyString(email))
      emailValidToContinue = false;
    
    return emailValidToContinue;

  }

  private IsEmailDuplicated(email: string) : boolean {

    let isEmailDuplicated = false;

    const user = this.users.find((user) => user.email === email);

    if (user) isEmailDuplicated = true;

    return isEmailDuplicated;

  }

  private IsEmailEmptyString(email: string) : boolean {
    return email.trim() === "";
  }

  //#endregion

}

export { UserController };
