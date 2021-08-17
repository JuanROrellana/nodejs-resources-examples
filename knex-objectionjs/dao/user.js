import {User} from "../models/user.js";

export class UserDAO{
    async getUserById(id){
        return User.query().findById(id);
    }
}