import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const router = Router();

router.route('/login')
    .post(UserController.login);

router.route('/')
    .get(UserController.list)
    .post(UserController.create);

router.route('/:id')
    .get(UserController.read)
    .put(UserController.update)
    .delete(UserController.remove);

export default router;