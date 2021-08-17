import { Router } from "express";

import UserController from "../controllers/user.js";

const userController = new UserController();

const router = new Router();

router.get('/user/:id', userController.getUser);

export default router;