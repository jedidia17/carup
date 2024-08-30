import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
/**
 * Middleware to authenticate JWT tokens.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function.
 */

export default function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null || !token || token.length === 0 || !token) {
        res.status(401).json({ error: 'Token is required' });
        return;
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            res.status(403).json({ error: 'Invalid token' });
            return;
        }
        req.user = user;
        next();
    });
}