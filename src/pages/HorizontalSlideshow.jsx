// HorizontalSlideshow.jsx
import React, { useState } from 'react';
import './jordin.css';

const HorizontalSlideshow = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const showSlides = (index) => {
    setSlideIndex(index);
  };

  const handlePrev = () => {
    showSlides(slideIndex - 1);
  };

  const handleNext = () => {
    showSlides(slideIndex + 1);
  };

  return (
    <div className="slideshow-container">
      <div className="slides" style={{ transform: `translateX(${-slideIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="prev" onClick={handlePrev}>&#10094;</button>
      <button className="next" onClick={handleNext}>&#10095;</button>
    </div>
  );
};

export default HorizontalSlideshow;
