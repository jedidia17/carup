import { client } from '../client.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
export default class UserController {
    static async create(req, res) {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(400).json({ error: 'Name, email, and password are required' });
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const user = await client.user.create({
                data: { name, email, password: hashedPassword },
            });
            const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '2099h' });
            res.status(201).json({
                message: 'User registered successfully',
                token: token,
                name: user.name,
                email: user.email
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error registering user',
                error: error.message
            });
            return;
        } finally {
            await client.$disconnect();
        }
    }


    static async login(req, res) {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: 'Email and password are required' });
            return;
        }
        try {
            const user = await client.user.findUnique({ where: { email } });
            if (!user || !(await bcrypt.compare(password, user.password))) {
                res.status(401).json({ error: 'Invalid email or password' });
                return;
            }
            const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '2099h' });
            res.json({
                message: 'Login successful',
                token: token,
                id: user.id,
                name: user.name,
                email: user.email,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error logging in',
                error: error.message
            });
        } finally {
            await client.$disconnect();
        }
    }

    static async list(_, res) {
        try {
            const users = await client.user.findMany({
                select: {
                    id: true,
                    name: true,
                    email: true,
                    created: true,
                    updated: true
                }
            });
            res.json(users);
        } catch (error) {
            res.status(500).json({
                message: 'Error retrieving users',
                error: error.message
            });
            return;
        } finally {
            await client.$disconnect();
        }
    }


    static async read(req, res) {
        const { id } = req.params;
        try {
            const user = await client.user.findUnique({
                where: { id: id }
            });
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            user.password = null;
            res.json(user);
        } catch (error) {
            res.status(500).json({
                message: 'Error retrieving user',
                error: error.message,
                stack: error.stack
            });
        } finally {
            await client.$disconnect();
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const { name, email, password } = req.body;
        if (!name && !email, !password) {
            res.status(400).json({ error: 'At least one of name or email or password is required' });
            return;
        }
        try {
            const updatedUser = await client.user.update({
                where: { id: id },
                data: { name, email },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    created: true,
                    updated: true
                }
            });

            if (!updatedUser) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.json({
                message: 'User updated successfully',
                id: updatedUser.id,
                name: updatedUser.name,
                email: updatedUser.email,
                updated: updatedUser.updated,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error updating user',
                error: error.message,
                stack: error.stack
            });
        } finally {
            await client.$disconnect();
        }
    }

    static async remove(req, res) {
        const { id } = req.params;
        try {
            const deletedUser = await client.user.delete({
                where: { id: id },
            });

            if (!deletedUser) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({
                message: 'Error deleting user',
                error: error.message,
                stack: error.stack
            });
            return;
        } finally {
            await client.$disconnect();
        }
    }
}