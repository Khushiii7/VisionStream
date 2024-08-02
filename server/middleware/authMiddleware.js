import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { Student, Teacher } from '../models/user.js';

const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.SECRET);

            if (decoded.user.role === 'student') {
                req.user = await Student.findById(decoded.user.id).select('-password');
            } else if (decoded.user.role === 'teacher') {
                req.user = await Teacher.findById(decoded.user.id).select('-password');
            }

            next();
        } catch (error) {
            console.error(error);[]
            res.status(401).json({ message: 'Token failed or expired, authorization denied' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'No token, authorization denied' });
    }
});

export default authMiddleware;
