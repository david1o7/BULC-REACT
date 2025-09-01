import React, { useState, useEffect, useMemo } from 'react';
import './features.css';
import next from "../../assets/edusity_assets/next.png"
import prev from "../../assets/edusity_assets/back.png"
import { Link } from 'react-router-dom';

const CourseSlides = ({
  items,
  renderItem,
  autoPlayMs = 5000,
  showDots = true,
  showArrows = true,
  onSlideChange,
}) => {

  const slides = items && items.length ? items : defaultSlides;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoPlayMs) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayMs);
    return () => clearInterval(interval);
  }, [autoPlayMs, slides.length]);

  useEffect(() => {
    onSlideChange && onSlideChange(currentSlide);
  }, [currentSlide, onSlideChange]);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToNextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goToPrevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const defaultRenderer = (slide) => (
    <div className="sliding-content">
      {slide.image ? <img src={slide.image} alt={slide.title || 'slide'} className="sliding-image" /> : null}
      <div className="sliding-text">
        <h2 className='slide-text'>{slide.title}</h2>
        {slide.subtitle ? <h3 className='slide-text'>{slide.subtitle}</h3> : null}
        {slide.description ? <p className='slide-text'>{slide.description}</p> : null}
        {slide?.slots?.body}
        {(slide.ctaLabel || slide.href) && (
          <Link
            className="sliding-cta"
            to="/download"
          >
            {slide.ctaLabel || 'Learn more'}
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <div className="sliding-display dark-theme">
      <div className="sliding-container">
        <div
          className="sliding-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id ?? index} className="sliding-slide">
              {slide?.slots?.header}
              {renderItem ? renderItem(slide, index, index === currentSlide) : defaultRenderer(slide)}
              {slide?.slots?.footer}
            </div>
          ))}
        </div>

        {showArrows && (
          <>
            <button
              className="sliding-nav sliding-nav-prev"
              onClick={goToPrevSlide}
              aria-label="Previous slide"
              type="button"
            >
              <img src={prev} style={{ height:"20px" , width:"auto" }} alt="prev" />
            </button>
            <button
              className="sliding-nav sliding-nav-next"
              onClick={goToNextSlide}
              aria-label="Next slide"
              type="button"
            >
              <img src={next} style={{ height:"20px" , width:"auto" }}  alt="next" />
            </button>
          </>
        )}

        {showDots && (
          <div className="sliding-dots" role="tablist" aria-label="Slide selector">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`sliding-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={index === currentSlide}
                role="tab"
                type="button"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseSlides;
