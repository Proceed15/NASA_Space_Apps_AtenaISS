// src/components/VideoPlayer.jsx

import React, { useState, useRef } from 'react';

// ▶️ A play icon (you can replace this with an SVG or an <img> tag)
const PlayIcon = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function VideoPlayer({ src, poster }) {
  // useState to track if the video is playing or not
  const [isPlaying, setIsPlaying] = useState(false);
  // useRef to get direct access to the <video> element
  const videoRef = useRef(null);

  // This function is called when the user clicks the container
  const handlePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    }
  };

  // This function is called when the video is paused via the native controls
  const handlePause = () => {
    setIsPlaying(false);
  };
  
  // --- STYLES ---
  const containerStyle = {
    position: 'relative',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '600px', // Example max width
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    transition: 'opacity 0.3s',
  };

  const videoStyle = {
    width: '100%',
    display: 'block',
  };

  return (
    <div style={containerStyle} onClick={handlePlay}>
      <video
        ref={videoRef}
        src={src}
        poster={poster} // The video's thumbnail
        style={videoStyle}
        onPause={handlePause}
        controls={isPlaying} // Show controls only when playing
      />

      {/* This overlay is only shown when the video is NOT playing */}
      {!isPlaying && (
        <div style={overlayStyle}>
          <PlayIcon />
        </div>
      )}
    </div>
  );
}