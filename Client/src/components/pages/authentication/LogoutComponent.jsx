import React from 'react';
import './Authentication.css';

const LogoutComponent = () => {
  const handleLogout = () => {
    localStorage.clear(); 

    window.location.href = '/'; 


  };

  return (
    <div className="logout">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutComponent;
