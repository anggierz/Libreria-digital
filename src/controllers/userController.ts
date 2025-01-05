import { User } from "../models/user";

export class UserController {
  private users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | string {
    const user = this.users.find((user) => user.id === id);

    if (!user) return `User with id ${id} does not exist`;

    return user;
  }

  //ADD BOOKS: Se le pasa un libro y este se añade a la lista de la clase Book
  addUser(user: User): User | string {
    let isEmailValid = this.emailChecker(user.email);

    if (!isEmailValid) {
      return "Email already exists for another user. Please choose another one";
    }

    user.id = this.users.length + 1;
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

  emailChecker(email: string): boolean {
    let emailValid = true;

    const user = this.users.find((user) => user.email === email);

    if (user) emailValid = false;

    return emailValid;
  }

}
