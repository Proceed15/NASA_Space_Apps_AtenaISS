// src/components/Header.jsx

import React, { useRef } from 'react';
import './Header.css'; // Import the combined CSS file

export default function Header() {
  const carouselRef = useRef(null);
  let index = 0;

  const moveSlide = (step) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const totalItems = carousel.children.length;
    index = (index + step + totalItems) % totalItems;

    const itemWidth = carousel.children[0].clientWidth;
    carousel.style.transform = `translateX(${-index * itemWidth}px)`;
  };

  return (
    <header className="header-container">
      {/* Menu (the links) */}
      <nav className="menu-container">
        <a href="https://www.nasa.gov/mission_pages/station/main/index.html" target="_blank" rel="noopener noreferrer">
          Learn More at NASA
        </a>
        <a href="https://api.wheretheiss.at/v1/satellites/25544" target="_blank" rel="noopener noreferrer">
          Current ISS Position
        </a>
        <a href="http://localhost:3001/api/iss" target="_blank" rel="noopener noreferrer">
          Our API
        </a>
      </nav>

      {/* Carousel */}
      <div className="carousel">
        <div className="carousel-images" ref={carouselRef}>
          <img src="https://images-assets.nasa.gov/image/iss038e042125/iss038e042125~large.jpg" alt="View from the Cupola" />
          <video src="https://images-assets.nasa.gov/video/NASA_Explorers_Microgravity-Trailer/NASA_Explorers_Microgravity-Trailer~large.mp4" autoPlay muted loop alt="Rocket Launch"></video>
          <img src="https://images-assets.nasa.gov/image/JSC2000-04066/JSC2000-04066~large.jpg" alt="First crew of the ISS" />
          <video src="https://images-assets.nasa.gov/video/jsc2023m000162_SCIENCETASIA%20FINAL_v07_HighQuality_1080_MP4/jsc2023m000162_SCIENCETASIA%20FINAL_v07_HighQuality_1080_MP4~large.mp4" autoPlay muted loop alt="Microgravity Experiment"></video>
          <img src="https://images-assets.nasa.gov/image/iss040e090540/iss040e090540~large.jpg" alt="Aurora from the ISS" />
          <img src="https://images-assets.nasa.gov/image/iss062e005579/iss062e005579~large.jpg" alt="ISS over Earth" />
        </div>
        
        <button className="carousel-btn left" onClick={() => moveSlide(-1)}>❮</button>
        <button className="carousel-btn right" onClick={() => moveSlide(1)}>❯</button>
      </div>
    </header>
  );
}