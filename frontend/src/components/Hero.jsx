// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  // --- Component styles (no changes here) ---

  const heroSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '60px 40px',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    gap: '40px',
  };

  const textContainerStyle = {
    flex: 1,
    maxWidth: '50%',
  };

  const imageContainerStyle = {
    flex: 1,
    maxWidth: '50%',
    maxHeight: '380px',
    overflow: 'hidden',
  };

  const imageStyle = {
    height: '400px',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
    objectFit: 'cover',
    display: 'block',
    botton: '-15px',
  };

  const titleStyle = {
    fontSize: '3.5rem',
    marginBottom: '20px',
    lineHeight: '1.1',
  };

  const subtitleStyle = {
    fontSize: '1.1rem',
    marginBottom: '30px',
    color: '#ccc',
  };

  const buttonStyle = {
    display: 'inline-block', // Added for proper link styling
    backgroundColor: '#e67e22',
    color: '#fff',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none', // Remove underline from the link
    textAlign: 'center',
  };

  // --- JSX structure of the component ---
  return (
    <section style={heroSectionStyle}>
      {/* Left Column: Texts and Button */}
      <div style={textContainerStyle}>
        <h1 style={titleStyle}>A Legacy Written In the Stars</h1>
        <p style={subtitleStyle}>
          The International Space Station represents the pinnacle of human
          collaboration and engineering, orbiting Earth as a beacon of discovery.
        </p>
        
        {/* --- THIS IS THE CHANGE --- */}
        {/* The <button> is now an <a> tag styled to look like a button */}
        <a
          href="https://www.nasa.gov/international-space-station/"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          Learn More
        </a>
      </div>

      {/* Right Column: Image */}
      <div style={imageContainerStyle}>
        <img
          src="https://images-assets.nasa.gov/image/s130e006575/s130e006575~large.jpg?w=1920&h=1311&fit=clip&crop=faces%2Cfocalpoint"
          alt="ISS orbiting Earth"
          style={imageStyle}
        />
      </div>
    </section>
  );
}