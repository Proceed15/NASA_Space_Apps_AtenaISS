// src/components/BackgroundVideo.jsx
import React from "react";

export default function BackgroundVideo() {
  return (
    <div style={{ position: "relative", height: "660px", overflow: "hidden" }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ position: "absolute", width: "100%", left: "0", top: "0", zIndex: "-1" }}
      >
        <source src="https://images-assets.nasa.gov/video/jsc2022m000138_Down_to_Earth_S2_E2_Sensory_Overload-SOCIAL/jsc2022m000138_Down_to_Earth_S2_E2_Sensory_Overload-SOCIAL~large.mp4" type="video/mp4" />
      </video>
      <div style={{ position: "relative", color: "white", padding: "20px" }}>
        <h1>🌌 Vista da Terra da ISS</h1>
        <p>Uma perspectiva única sobre nosso planeta azul.</p>
      </div>
    </div>
  );
}
