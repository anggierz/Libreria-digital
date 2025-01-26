"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
//Services are where the business logic is located
class UserController {
    constructor() {
        this.users = [];
        //#endregion
    }
    getUsers() {
        return this.users;
    }
    getUserById(id) {
        const user = this.users.find((user) => user.id === id);
        if (!user)
            return `User with id ${id} does not exist`;
        return user;
    }
    addUser(user) {
        let isEmailValidForCreation = this.IsEmailValidForCreation(user.email);
        if (!isEmailValidForCreation) {
            return "Email is duplicated or empty string";
        }
        user.id = this.users.length + 1;
        this.users.push(user);
        return user;
    }
    deleteUser(id) {
        let userIndex = this.findUserIndexById(id);
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            return "User deleted successfully";
        }
        return "User not found";
    }
    //#region User Private methods
    findUserIndexById(id) {
        let index = this.users.findIndex((user) => user.id === id);
        return index;
    }
    IsEmailValidForCreation(email) {
        let emailValidToContinue = true;
        if (this.IsEmailDuplicated(email) || this.IsEmailEmptyString(email))
            emailValidToContinue = false;
        return emailValidToContinue;
    }
    IsEmailDuplicated(email) {
        let isEmailDuplicated = false;
        const user = this.users.find((user) => user.email === email);
        if (user)
            isEmailDuplicated = true;
        return isEmailDuplicated;
    }
    IsEmailEmptyString(email) {
        return email.trim() === "";
    }
}
exports.UserController = UserController;
