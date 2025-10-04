import React, { useState } from "react";

const events = [
  {
    year: 1998,
    title: "Zarya Launch",
    media: "https://images-assets.nasa.gov/image/KSC-98pc1749/KSC-98pc1749~medium.jpg",
    desc: "Zarya was the first module of the ISS, launched in November 1998, starting the assembly of the station."
  },
  {
    year: 2000,
    title: "First Permanent Crew",
    media: "https://images-assets.nasa.gov/image/JSC2000-04066/JSC2000-04066~large.jpg",
    desc: "In November 2000, Expedition 1 arrived at the ISS, marking the beginning of continuous human presence in orbit."
  },
  {
    year: 2011,
    title: "Principal Assembly Complete",
    media: "https://images-assets.nasa.gov/image/iss028e020926/iss028e020926~orig.jpg",
    desc: "After more than a decade of work, the main structure of the ISS was completed in 2011."
  },
  {
    year: 2020,
    title: "First Private Mission (Crew Dragon)",
    media: "https://images-assets.nasa.gov/image/KSC-20211024-PH-SPX01_0001/KSC-20211024-PH-SPX01_0001~large.jpg",
    desc: "The SpaceX Crew Dragon carried astronauts to the ISS on a historic mission in 2020, ushering in the era of commercial crewed flights."
  }
];

export default function ISSTimeline() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ padding: "20px", background: "#111", color: "#fff" }}>
      <h2>📜 ISS Timeline </h2>
      <p>Click The Mark to Expand</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {events.map((e, i) => (
          <li
            key={i}
            onClick={() => setSelected(selected === i ? null : i)}
            style={{
              marginBottom: "20px",
              cursor: "pointer",
              padding: "10px",
              borderRadius: "8px",
              background: selected === i ? "#1c1c1c" : "transparent",
              transition: "background 0.3s"
            }}
          >
            {/* When collapsed → show thumbnail + title */}
            {selected !== i && (
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <img
                  src={e.media}
                  alt={e.title}
                  style={{ width: "80px", height: "60px", objectFit: "cover", borderRadius: "6px" }}
                />
                <h3 style={{ margin: 0 }}>{e.year} – {e.title}</h3>
              </div>
            )}

            {/* When expanded → show full view */}
            {selected === i && (
              <div>
                <h3>{e.year} – {e.title}</h3>
                <img
                  src={e.media}
                  alt={e.title}
                  style={{ width: "70%", borderRadius: "10px", margin: "10px 0" }}
                />
                <p>{e.desc}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
