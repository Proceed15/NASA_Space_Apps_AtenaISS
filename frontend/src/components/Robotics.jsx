// src/components/Robotics.jsx
import React from "react";

const robotics = [
  {
    name: "Canadarm2",
    img: "https://images-assets.nasa.gov/image/iss041e049091/iss041e049091~large.jpg",
    desc: "A 17-meter-long robotic arm used for moving supplies, assembling station modules, and assisting astronauts during spacewalks."
  },
  {
    name: "Dextre",
    img: "https://images-assets.nasa.gov/image/iss062e113107/iss062e113107~large.jpg",
    desc: "A two-armed robot nicknamed the 'Canada Handyman', designed to perform delicate repairs and reduce the need for risky EVAs."
  },
  {
    name: "Robonaut2",
    img: "https://images-assets.nasa.gov/image/iss036e013177/iss036e013177~large.jpg",
    desc: "A humanoid robot designed to work alongside astronauts inside the ISS, assisting with routine or hazardous tasks."
  }
];

export default function Robotics() {
  return (
    <section
      style={{
        padding: "60px 20px",
        background: "#0b0c10",
        color: "#fff",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#66fcf1" }}>
        🤖 Robotics on the ISS
      </h2>
      <p style={{ maxWidth: "800px", margin: "0 auto 50px", color: "#c5c6c7" }}>
        Robotics plays a crucial role in the daily operations of the International Space Station. 
        From helping astronauts with construction and maintenance to conducting delicate experiments, 
        these robotic systems extend human capabilities in space.
      </p>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {robotics.map((r, i) => (
          <div
            key={i}
            style={{
              width: "280px",
              background: "#1f2833",
              border: "1px solid #45a29e33",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "left",
              transition: "transform 0.3s, box-shadow 0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(102, 252, 241, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={r.img}
              alt={r.name}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "12px"
              }}
            />
            <h3 style={{ margin: "10px 0", color: "#66fcf1" }}>{r.name}</h3>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.5", color: "#c5c6c7" }}>
              {r.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
// --- Fim do arquivo Robotics.jsx ---