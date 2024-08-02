import React, { useState, useEffect } from 'react';
import './Subscription.css';
function SubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const dummySubscriptions = [
        {
          id: 1,
          channelName: 'Tech Guru',
          description: 'All about tech tutorials and reviews.',
          thumbnail: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          channelName: 'Coding Ninja',
          description: 'Coding tips.',
          thumbnail: 'https://via.placeholder.com/150',
        },
        {
          id: 3,
          channelName: 'WebDev World',
          description: 'WebDev tutorials',
          thumbnail: 'https://via.placeholder.com/150',
        },
      ];
      setSubscriptions(dummySubscriptions);
    }, 1000); 
  }, []);

  return (
    <div className="subscriptions-page">
      <h1>Subscribed Channels</h1>
      <div className="subscriptions-grid">
        {subscriptions.map((subscription) => (
          <div key={subscription.id} className="subscription-item">
            <h3>{subscription.channelName}</h3>
            <p>{subscription.description}</p>
            <img src={subscription.thumbnail} alt={subscription.channelName} />
            <a href={`/`} target="_blank" rel="noopener noreferrer">
              View Channel
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubscriptionsPage;