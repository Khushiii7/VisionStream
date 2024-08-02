import React, { useState } from 'react';
import './UploadVideo.css';
function VideoUpload() {
  const [videoDetails, setVideoDetails] = useState({
    title: '',
    description: '',
    videoFile: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVideoDetails({
      ...videoDetails,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoDetails({
      ...videoDetails,
      videoFile: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Video Details:', videoDetails);
    setVideoDetails({
      title: '',
      description: '',
      videoFile: null,
    });
  };

  return (
    <div className="video-upload">
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={videoDetails.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={videoDetails.description}
            onChange={handleInputChange}
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <label>Video File:</label>
          <input
            type="file"
            accept="video/*"
            name="videoFile"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Upload Video</button>
      </form>
    </div>
  );
}

export default VideoUpload;
