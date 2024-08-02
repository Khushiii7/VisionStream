import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root for concurrent mode using createRoot
const root = createRoot(document.getElementById('root'));

// Render your app within the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, you can use reportWebVitals
reportWebVitals();
