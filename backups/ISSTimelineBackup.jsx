// src/components/ISSTimeline.jsx
import React from "react";

const events = [
  {
    year: 1998,
    title: "Lançamento do Zarya",
    media: "https://images-assets.nasa.gov/image/KSC-98pc1749/KSC-98pc1749~medium.jpg"
  },
  {
    year: 2000,
    title: "Primeira tripulação permanente",
    media: "https://images-assets.nasa.gov/image/JSC2000-04066/JSC2000-04066~large.jpg"
  },
  {
    year: 2011,
    title: "Conclusão da montagem principal",
    media: "https://images-assets.nasa.gov/image/iss028e020926/iss028e020926~orig.jpg"
  },
  {
    year: 2020,
    title: "Primeira missão privada (Crew Dragon)",
    media: "https://images-assets.nasa.gov/image/KSC-20211024-PH-SPX01_0001/KSC-20211024-PH-SPX01_0001~large.jpg"
  }
];

export default function ISSTimeline() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>📜 Linha do Tempo da ISS</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {events.map((e, i) => (
          <li key={i} style={{ marginBottom: "30px" }}>
            <h3>{e.year} - {e.title}</h3>
            <img src={e.media} alt={e.title} width="60%" style={{ borderRadius: "10px" }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
//This component displays a timeline of key events in the history of the International Space Station (ISS) with images.