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
    let isEmailValidForCreation = this.emailChecker(user.email);

    if (!isEmailValidForCreation) {
      return "Email is incorrect or duplicated";
    }

    this.users.push(user);
    return user;
  }

  updateUser(id: number, userToUpdate: Partial<User>): User | string {
    let userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...userToUpdate };
      return this.users[userIndex];
    }
    return "User not found";
  }

  deleteUser(id: number): string {
    let userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      this.users.splice(userIndex);
      return "User deleted successfully";
    }
    return "User not found";
  }

  //#region Private methods

  private emailChecker(email: string): boolean {
    let emailValidToContinue = true;

    if (this.IsEmailInvalid(email) || this.IsEmailDuplicated(email))
      emailValidToContinue = false;

    return emailValidToContinue;

  }

  private IsEmailInvalid(email: string): boolean {
    let isEmailInvalid = false;
    const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;

    if (emailRegex.test(email))
      isEmailInvalid = true;

    return isEmailInvalid;
  }

  private IsEmailDuplicated(email: string) : boolean {

    let isEmailDuplicated = false;

    const user = this.users.find((user) => user.email === email);

    if (user) isEmailDuplicated = true;

    return isEmailDuplicated;

  }


  //#endregion

}

export { UserController };
