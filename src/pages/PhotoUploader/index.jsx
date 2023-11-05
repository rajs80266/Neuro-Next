import React, { useState } from 'react';
import './style.css';

const PhotoUploader = () => {
  const [image, setImage] = useState(null);

  const handleCameraClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const mediaStreamTrack = stream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(mediaStreamTrack);

      const blob = await imageCapture.takePhoto();
      const imageUrl = URL.createObjectURL(blob);

      setImage(imageUrl);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
  };

  return (
    <div className="photo-uploader">
      <div className="upload-options">
        <button className="option-button" onClick={handleCameraClick}>
          Take Live Photo
        </button>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="file-input"
        />
      </div>
      {image && (
        <div className="preview">
          <h3>Preview</h3>
          <img src={image} alt="Uploaded" className="preview-image" />
        </div>
      )}
    </div>
  );
};

export default PhotoUploader;
