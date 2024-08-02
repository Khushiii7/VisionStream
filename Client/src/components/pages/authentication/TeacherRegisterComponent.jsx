import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerTeacher } from '../../../services/api';

const TeacherRegisterComponent = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleTeacherRegistration = async (e) => {
        e.preventDefault();
        try {
            await registerTeacher(username, password);
            setIsLoggedIn(true);
            navigate('/teacher/home');
        } catch (error) {
            alert(error.message || 'Registration failed!');
        }
    };

    return (
        <div className='auth-form'>
            <h2>Teacher Registration</h2>
            <form onSubmit={handleTeacherRegistration}>
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='auth-input'
                    required
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='auth-input'
                    required
                />
                <button type="submit" className='auth-button'>Register</button>
            </form>
        </div>
    );
};

export default TeacherRegisterComponent;
