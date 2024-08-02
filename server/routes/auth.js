import express from 'express';
import { registerStudent, registerTeacher, studentLogin, teacherLogin } from '../controller/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register/student', registerStudent);
router.post('/register/teacher', registerTeacher);
router.post('/login/student', studentLogin);
router.post('/login/teacher', teacherLogin);

router.get('/student/dashboard', authMiddleware, (req, res) => {
    res.json({ message: 'Student Dashboard' });
});

router.get('/teacher/dashboard', authMiddleware, (req, res) => {
    res.json({ message: 'Teacher Dashboard' });
});

export default router;
