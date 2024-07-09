import React, { useState, useEffect } from 'react';
import './Home.css';

function HomePage() {
  const [latestVideos, setLatestVideos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const dummyVideos = [
        {
          id: 1,
          title: 'Introduction to React Hooks',
          description: 'Learn how to use React hooks for state and effects.',
          thumbnail: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          title: 'CSS Grid Layout Tutorial',
          description: 'Master CSS Grid Layout with this comprehensive tutorial.',
          thumbnail: 'https://via.placeholder.com/150',
        },
        {
          id: 3,
          title: 'JavaScript ES6 Features',
          description: 'Explore the latest JavaScript ES6 features and syntax.',
          thumbnail: 'https://via.placeholder.com/150',
        },
      ];
      setLatestVideos(dummyVideos);
    }, 1000); 
  }, []);

  return (
    <div className="home-container">
      <h1>Home Page - Latest Videos</h1>
      <div className="video-grid">
        {latestVideos.map((video) => (
          <div key={video.id} className="video-item">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <img src={video.thumbnail} alt={video.title} />
            <a href={`/`} target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
