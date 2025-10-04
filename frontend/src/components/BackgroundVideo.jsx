// src/components/BackgroundVideo.jsx
import React, { useState, useRef } from "react";

export default function BackgroundVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  
  const containerStyle = {
    position: 'relative',
    height: '80vh',
    overflow: 'hidden',
    backgroundColor: '#000',
  };
  
  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };
  
  const contentOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    // The background color is now conditional
    backgroundColor: isPlaying ? 'transparent' : 'rgba(0, 0, 0, 0.5)',
    transition: 'background-color 0.5s ease', // Smooth transition for the background
  };

  const playButtonStyle = {
    marginTop: '20px',
    fontSize: '1.5rem',
    padding: '10px 25px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: '2px solid white',
    color: 'white',
    borderRadius: '50px',
  };

  return (
    <div style={containerStyle}>
      <video
        ref={videoRef}
        style={videoStyle}
        loop
        playsInline
        onClick={handlePlayPause} // Allow clicking anywhere on the video to play/pause
      >
        <source 
          src="https://images-assets.nasa.gov/video/jsc2022m000138_Down_to_Earth_S2_E2_Sensory_Overload-SOCIAL/jsc2022m000138_Down_to_Earth_S2_E2_Sensory_Overload-SOCIAL~large.mp4" 
          type="video/mp4" 
        />
      </video>
      
      <div style={contentOverlayStyle}>
        
        {/* This is the key change: Only render text when video is NOT playing */}
        {!isPlaying && (
          <>
            <h1>🌌 A Between Generation Guide</h1>
            <p>A fresh Start on our Travel with the ISS.</p>
          </>
        )}
        
        <button style={playButtonStyle} onClick={handlePlayPause}>
          {isPlaying ? '||' : 'Play'}
        </button>
      </div>
    </div>
  );
}