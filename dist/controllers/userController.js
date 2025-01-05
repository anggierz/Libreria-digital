"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor() {
        this.users = [];
    }
    getUsers() {
        return this.users;
    }
    getUserById(id) {
        const user = this.users.find((user) => user.id === id);
        if (!user)
            return `User with ${id} does not exist`;
        return user;
    }
    //ADD BOOKS: Se le pasa un libro y este se añade a la lista de la clase Book
    addUser(user) {
        let isEmailValid = this.emailChecker(user.email);
        if (!isEmailValid) {
            return "Email already exists for another user. Please choose another one";
        }
        user.id = this.users.length + 1;
        this.users.push(user);
        return user;
    }
    updateUser(id, userToUpdate) {
        if (userToUpdate.email) {
            let isEmailValid = this.emailChecker(userToUpdate.email);
            if (!isEmailValid) {
                return "Email already exists for another user. Please choose another one";
            }
        }
        let userIndex = this.users.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
            this.users[userIndex] = Object.assign(Object.assign({}, this.users[userIndex]), userToUpdate);
            return this.users[userIndex];
        }
        return "User not found";
    }
    deleteUser(id) {
        let userIndex = this.users.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
            this.users.splice(userIndex);
            return "User deleted successfully";
        }
        return "User not found";
    }
    emailChecker(email) {
        let emailValid = true;
        const user = this.users.find((user) => user.email === email);
        if (user)
            emailValid = false;
        return emailValid;
    }
}
exports.UserController = UserController;
