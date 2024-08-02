import React, { useState, useEffect } from 'react';
import './StudentProfile.css';

function StudentProfilePage() 
{
  const [studentProfile, setStudentProfile] = useState({
    name: 'Jkl',
    email: 'jkl@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    bio: 'I am a computer science student with a passion for web development and AI.',
    phone: '9045667890',
    dob: '07-06-2004',
  });

  useEffect(() => {
    setStudentProfile({
      name: 'Jkl',
      email: 'jkl@example.com',
      profilePicture: 'https://via.placeholder.com/150',
      bio: 'I am a computer science student with a passion for web development and AI.',
      phone: '9045667890',
      dob: '07-06-2004',
    });
  }, []);

  return (
    <div className="student-profile-page">
      <h1>Profile</h1>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-picture-container">
            <img src={studentProfile.profilePicture} alt="Profile" className="profile-picture" />
          </div>
          <div className="profile-info">
            <h2>{studentProfile.name}</h2>
            <p>{studentProfile.email}</p>
          </div>
        </div>
        <div className="profile-details">
          <h3>About Me</h3>
          <p>{studentProfile.bio}</p>
          <h3>Contact Information</h3>
          <p><strong>Phone:</strong> {studentProfile.phone}</p>
          <h3>Personal Details</h3>
          <p><strong>Date of Birth:</strong> {studentProfile.dob}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentProfilePage;
