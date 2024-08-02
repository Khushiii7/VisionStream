import React, { useState, useEffect } from 'react';
import './History.css';
function HistoryPage() {
  const [historyVideos, setHistoryVideos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const dummyHistoryVideos = [
        {
          id: 1,
          title: 'Understanding JavaScript Closures',
          description: 'A deep dive into JavaScript closures and how to use them.',
          thumbnail: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          title: 'Responsive Web Design Basics',
          description: 'Learn the fundamentals of responsive web design.',
          thumbnail: 'https://via.placeholder.com/150',
        },
        {
          id: 3,
          title: 'Advanced CSS Flexbox Techniques',
          description: 'Take your CSS flexbox skills to the next level.',
          thumbnail: 'https://via.placeholder.com/150',
        },
      ];
      setHistoryVideos(dummyHistoryVideos);
    }, 1000); 
  }, []);

  return (
    <div className="history-page">
      <h1>Watch History</h1>
      <div className="history-grid">
        {historyVideos.map((video) => (
          <div key={video.id} className="history-item">
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

export default HistoryPage;
