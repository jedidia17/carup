import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import authenticateToken from '../middlewares/authMiddleware.js';

const router = Router();


router.route('/')
    .get(authenticateToken, UserController.list)
    .post(UserController.create);

router.route('/:id')
    .get(authenticateToken, UserController.read)
    .put(authenticateToken, UserController.update)
    .delete(authenticateToken, UserController.remove);

export default router;