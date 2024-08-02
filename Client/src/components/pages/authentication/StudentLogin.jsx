import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { studentLogin } from '../../../services/api';
import './Authentication.css'; 

const StudentLoginComponent = ({ setIsLoggedIn, setRole }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleStudentLogin = async (e) => {
        e.preventDefault();
        try {
            const { token } = await studentLogin(username, password);
            localStorage.setItem('token', token);
            localStorage.setItem('role', 'student');
            setIsLoggedIn(true);
            setRole('student');
            navigate('/student/home');
        } catch (error) {
            alert(error.message || 'Login failed!');
        }
    };

    return (
        <div className='login-form'>
            <h2>Student Login</h2>
            <form onSubmit={handleStudentLogin}>
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

export default StudentLoginComponent;
