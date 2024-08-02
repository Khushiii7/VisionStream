import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Teacher, Student } from '../models/user.js';

// Student registration
export const registerStudent = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingStudent = await Student.findOne({ username });
        if (existingStudent) {
            return res.status(409).json({ message: 'Student already exists!' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const student = new Student({
            username,
            password: hashedPassword,
        });
        await student.save();
        res.status(201).json({ message: 'Student registered successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Teacher registration
export const registerTeacher = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingTeacher = await Teacher.findOne({ username });
        if (existingTeacher) {
            return res.status(409).json({ message: 'Teacher already exists!' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const teacher = new Teacher({
            username,
            password: hashedPassword,
        });
        await teacher.save();
        res.status(201).json({ message: 'Teacher registered successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Student login
export const studentLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const student = await Student.findOne({ username });

        if (!student) {
            return res.status(400).json({ error: 'User not found!' });
        }

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials!' });
        }

        // Generate JWT token
        const payload = {
            user: {
                id: student.id,
                role: 'student',
            },
        };

        jwt.sign(payload, process.env.SECRET, { expiresIn: '2h' }, (err, token) => {
            if (err) {
                throw err;
            }
            res.json({ token });
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Teacher login
export const teacherLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const teacher = await Teacher.findOne({ username });

        if (!teacher) {
            return res.status(400).json({ error: 'User not found!' });
        }

        const isMatch = await bcrypt.compare(password, teacher.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials!' });
        }

        //token
        const payload = {
            user: {
                id: teacher.id,
                role: 'teacher',
            },
        };

        jwt.sign(payload, process.env.SECRET, { expiresIn: '2h' }, (err, token) => {
            if (err) {
                throw err;
            }
            res.json({ token });
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};
