import React, { useState, useEffect } from 'react';
import './LikedVideo.css';
function LikedVideosPage() 
{
  const [likedVideos, setLikedVideos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const dummyLikedVideos = [
        {
          id: 1,
          title: 'React Router Tutorial',
          description: 'Learn how to use React Router for navigating between pages.',
          thumbnail: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          title: 'Advanced JavaScript Concepts',
          description: 'Deep dive into advanced JavaScript concepts.',
          thumbnail: 'https://via.placeholder.com/150',
        },
        {
          id: 3,
          title: 'CSS Animation Techniques',
          description: 'Enhance your web pages with CSS animations.',
          thumbnail: 'https://via.placeholder.com/150',
        },
      ];
      setLikedVideos(dummyLikedVideos);
    }, 1000); 
  }, []);

  return (
    <div className="liked-videos-page">
      <h1>Liked Videos</h1>
      <div className="liked-videos-grid">
        {likedVideos.map((video) => (
          <div key={video.id} className="liked-video-item">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <img src={video.thumbnail} alt={video.title} />
            <a href={`/`} target="_blank" rel="noopener noreferrer">
              Watch Again
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikedVideosPage;
