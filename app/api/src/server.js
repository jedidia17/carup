import express from 'express';
import cors from 'cors';
import UserController from './controllers/user.controller.js';
import userRoutes from './routes/user.routes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/users', userRoutes);
app.post('/login', UserController.login);

app.use('/', function (_, res) {
    res.sendStatus(404);
});

export default app;