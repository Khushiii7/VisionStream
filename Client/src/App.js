import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import StudentLoginComponent from './components/pages/authentication/StudentLogin';
import TeacherLoginComponent from './components/pages/authentication/TeacherLogin';
import TeacherRegisterComponent from './components/pages/authentication/TeacherRegisterComponent';
import StudentRegisterComponent from './components/pages/authentication/StudentRegisterComponent';
import Role from './components/pages/authentication/Role';
import StudentSidebar from './components/sidebar/StudentSidebar';
import TeacherSidebar from './components/sidebar/TeacherSidebar';
import HomePage from './components/pages/home/StudentHome';
import TeacherDashboard from './components/pages/home/TeacherHome';

import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState('');

    useEffect(() => {
        const storedRole = localStorage.getItem('role');
        if (storedRole) {
            setRole(storedRole);
        }
    }, []);

    return (
        <Router>
            <div className="App">
                {isLoggedIn && <Header />}
                <Routes>
                    {!isLoggedIn ? (
                        <>
                            <Route path="/auth/register/student" element={<StudentRegisterComponent setIsLoggedIn={setIsLoggedIn} setRole={setRole} />} />
                            <Route path="/auth/register/teacher" element={<TeacherRegisterComponent setIsLoggedIn={setIsLoggedIn} setRole={setRole} />} />
                            <Route path="/auth/login/student" element={<StudentLoginComponent setIsLoggedIn={setIsLoggedIn} setRole={setRole} />} />
                            <Route path="/auth/login/teacher" element={<TeacherLoginComponent setIsLoggedIn={setIsLoggedIn} setRole={setRole} />} />
                            <Route path="/auth/login" element={<Role setIsLoggedIn={setIsLoggedIn} />} />
                            <Route path="*" element={<Navigate to="/auth/login" />} />
                        </>
                    ) : (
                        <>
                            <Route path="/student/home" element={<HomePage />} />
                            <Route path="/teacher/home" element={<TeacherDashboard />} />
                            <Route path="*" element={<Navigate to="/auth/login" />} />
                        </>
                    )}
                </Routes>
                {isLoggedIn && (
                    <>
                        {role === 'student' && <StudentSidebar />}
                        {role === 'teacher' && <TeacherSidebar />}
                    </>
                )}
            </div>
        </Router>
    );
}

export default App;
