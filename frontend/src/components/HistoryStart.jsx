// src/components/HistoryStart.jsx
import React from "react";

export default function HistoryStart() 
{
  return (
    <section style={{ padding: "40px", background: "#111", color: "#fff" }}>
      <h2>🚀 The Beginning: Launch of the ISS</h2>
      <p>
        In 1998, the first module, Zarya, was launched. From there began humanity's greatest engineering feat in orbit.
        In 1999, the first crew, Expedition 1, arrived at the station, marking the beginning of a continuous human presence in space ever since.
        In 2000, Expedition 1, composed of Russian cosmonauts Yuri Gidzenko and Sergei Krikalev, and American astronaut William Shepherd, arrived at the station.
      </p>
      <img
        src="https://images-assets.nasa.gov/image/KSC-99pp1356/KSC-99pp1356~medium.jpg"
        alt="First ISS crew"
        style={{ width: "80%", borderRadius: "10px", marginTop: "20px" }}
      />
    </section>
  );
}
// Compare this snippet from frontend/src/components/ISSLocationMedia.jsx:
// // src/components/ISSLocationMedia.jsx
