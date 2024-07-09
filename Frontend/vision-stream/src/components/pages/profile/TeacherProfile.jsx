import React, { useState, useEffect } from 'react';
import './TeacherProfile.css';

function TeacherProfile() {
  const [teacherProfile, setTeacherProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    bio: 'I am passionate about teaching and helping students achieve their goals.',
    phone: '9876543210',
    dob: '10-12-1980',
  });

  useEffect(() => {
    // Simulating fetching teacher profile data
    setTeacherProfile({
      name: 'ABC',
      email: 'abc@example.com',
      profilePicture: 'https://via.placeholder.com/150',
      bio: 'I am passionate about teaching and helping students achieve their goals.',
      phone: '9876543210',
      exp: '4 years',
    });
  }, []);

  return (
    <div className="teacher-profile-page">
      <h1>Profile</h1>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-picture-container">
            <img src={teacherProfile.profilePicture} alt="Profile" className="profile-picture" />
          </div>
          <div className="profile-info">
            <h2>{teacherProfile.name}</h2>
            <p>{teacherProfile.email}</p>
          </div>
        </div>
        <div className="profile-details">
          <h3>About Me</h3>
          <p>{teacherProfile.bio}</p>
          <h3>Contact Information</h3>
          <p><strong>Phone:</strong> {teacherProfile.phone}</p>
          <h3>Personal Details</h3>
          <p><strong>Experience:</strong> {teacherProfile.exp}</p>
        </div>
      </div>
    </div>
  );
}

export default TeacherProfile;
