import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './style.css';

import image1 from '../../images/image1.png';

const HomePage = () => {
    const images = [
      image1,
      image1,
      image1,
    ];
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex =>
          (prevIndex + 1) % images.length
        );
      }, 2000);
  
      return () => clearInterval(interval);
    }, [images.length]);
  
    return (
      <div className="image-slider-container">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="image-slider"
        />
        <div className="button-container">
          <Link to="/login">
            <button className="button">
              Let's get started
            </button>
          </Link>
        </div>
      </div>
    );
  };

export default HomePage;
