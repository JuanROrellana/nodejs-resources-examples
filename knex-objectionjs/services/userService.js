import {UserDAO} from "../dao/user.js";

const userDAO = new UserDAO();

export class UserService{
    getUser(id) {
        return userDAO.getUserById(id);
    }
}