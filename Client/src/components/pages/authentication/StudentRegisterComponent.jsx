import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerStudent } from '../../../services/api';
import './Authentication.css'; 

const StudentRegisterComponent = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleStudentRegistration = async (e) => {
        e.preventDefault();
        try {
            await registerStudent(username, password);
            setIsLoggedIn(true);
            navigate('/student/home');
        } catch (error) {
            alert(error.message || 'Registration failed!');
        }
    };

    return (
        <div className="auth-form">
            <h2>Student Registration</h2>
            <form onSubmit={handleStudentRegistration}>
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="auth-input"
                    required
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="auth-input"
                    required
                />
                <button type="submit" className="auth-button">Register</button>
            </form>
        </div>
    );
};

export default StudentRegisterComponent;
