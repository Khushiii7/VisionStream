import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { teacherLogin } from '../../../services/api';
import './Authentication.css'; 

const TeacherLoginComponent = ({ setIsLoggedIn, setRole }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleTeacherLogin = async (e) => {
        e.preventDefault();
        try {
            const { token } = await teacherLogin(username, password);
            localStorage.setItem('token', token);
            localStorage.setItem('role', 'teacher');
            setIsLoggedIn(true);
            setRole('teacher');
            navigate('/teacher/home');
        } catch (error) {
            alert(error.message || 'Login failed!');
        }
    };

    return (
        <div className='login-form'>
            <h2>Teacher Login</h2>
            <form onSubmit={handleTeacherLogin}>
                <div className='form-group'>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='login-button'>Login</button>
            </form>
        </div>
    );
};

export default TeacherLoginComponent;
