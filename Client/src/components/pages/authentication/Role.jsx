import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Authentication.css'; 
import StudentRegisterComponent from './StudentRegisterComponent';
import TeacherRegisterComponent from './TeacherRegisterComponent';

const Role = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [roleSelected, setRoleSelected] = useState(null);

    const handleRoleSelection = (role) => {
        setRoleSelected(role);
    };

    return (
        <div className="role-selection">
            <h2>Select Your Role</h2>
            <button className="role-button" onClick={() => handleRoleSelection('student')}>
                Student Register
            </button>
            <button className="role-button" onClick={() => handleRoleSelection('teacher')}>
                Teacher Register
            </button>

            {roleSelected === 'student' && <StudentRegisterComponent setIsLoggedIn={setIsLoggedIn} />}
            {roleSelected === 'teacher' && <TeacherRegisterComponent setIsLoggedIn={setIsLoggedIn} />}

            <p>Already registered? <button className="login-button" onClick={() => navigate('/auth/login/student')}>Student Login</button></p>
            <p>Already registered? <button className="login-button" onClick={() => navigate('/auth/login/teacher')}>Teacher Login</button></p>
        </div>
    );
};

export default Role;
