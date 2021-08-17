import {UserService} from "../services/userService.js";

const userService = new UserService();

export default class UserController{
    async getUser(req, res, next){
        try{
            const user = await userService.getUser(req.params.id);
            res.json(user);
        }catch (err){
            console.error(err);
            res.status(500).json(err);
        }
    }
}
