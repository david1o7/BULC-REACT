import React, { useState, useEffect } from 'react';
import './SlidingDisplay.css';
import { Link } from "react-router-dom"
import pic from "../../assets/BULC/1.png"
import pic1 from "../../assets/BULC/3.png"
import pic2 from "../../assets/edusity_assets/leafpic.png"
const SlidingDisplay = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Work Mode",
      subtitle: "Focus. Execute. Repeat.",
      description: "victory belongs to the most persevering.",
      
    },
    {
      id: 2,
      title: "They Slept, I Worked",
      subtitle: "Let your effort speak.",
      description: "Success doesn't come to those who wait.",
      
    },
    {
      id: 3,
      title: "BULC Nation",
      subtitle: "Join the movement.",
      description: "Be part of something bigger.",
      image: pic2,
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToNextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goToPrevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="sliding-display dark-theme">
      <div className="sliding-container">
        <div
          className="sliding-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="sliding-slide">
              <div className="sliding-content">
              <img src={slide.image}  className="sliding-image" />
                <div className="sliding-text">
                  <h2>{slide.title}</h2>
                  <h3>{slide.subtitle}</h3>
                  <p>{slide.description}</p> 
                  <button
                    className="sliding-cta"
                  >
                    Work Harder 💪
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="sliding-nav sliding-nav-prev" onClick={goToPrevSlide}>
          ‹
        </button>
        <button className="sliding-nav sliding-nav-next" onClick={goToNextSlide}>
          ›
        </button>

        <div className="sliding-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`sliding-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingDisplay;
