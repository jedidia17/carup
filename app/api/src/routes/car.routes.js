import { Router } from "express";
import CarController from "../controllers/car.controller.js";
import authenticateToken from '../middlewares/authMiddleware.js';

const router = Router();


router.route('/')
    .get(authenticateToken, CarController.list)
    .post(CarController.create);

router.route('/:id')
    .get(authenticateToken, CarController.read)
    .put(authenticateToken, CarController.update)
    .delete(authenticateToken, CarController.remove);

export default router;