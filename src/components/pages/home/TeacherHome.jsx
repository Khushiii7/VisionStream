import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TeacherHome.css';

const TeacherDashboard = () => {
  const [uploadedVideos, setUploadedVideos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const dummyVideos = [
        {
          id: 1,
          title: 'Introduction to React Hooks',
          thumbnail: 'https://via.placeholder.com/150',
          url: 'https://example.com/video1.mp4',
        },
        {
          id: 2,
          title: 'CSS Layout Tutorial',
          thumbnail: 'https://via.placeholder.com/150',
          url: 'https://example.com/video2.mp4',
        },
      ];
      setUploadedVideos(dummyVideos);
    }, 1000);
  }, []);

  return (
    <div className="teacher-dashboard">
      <h1>Teacher Dashboard - Uploaded Videos</h1>
      <div className="uploaded-videos">
        {uploadedVideos.map((video) => (
          <Link key={video.id} to={`/teacher/video/${video.id}`} className="video-link">
            <div className="video-item">
              <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;
