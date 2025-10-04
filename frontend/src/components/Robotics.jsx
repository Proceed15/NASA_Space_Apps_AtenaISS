import React from "react";

const robotics = [
  {
    name: "Canadarm2",
    img: "https://images-assets.nasa.gov/image/iss031e056155/iss031e056155~orig.jpg",
    desc: "A 17-meter-long robotic arm used for moving supplies, assembling station modules, and assisting astronauts during spacewalks."
  },
  {
    name: "Dextre",
    img: "https://images-assets.nasa.gov/image/iss026e012146/iss026e012146~orig.jpg",
    desc: "A two-armed robot nicknamed the 'Canada Handyman', designed to perform delicate repairs and reduce the need for risky EVAs."
  },
  {
    name: "Robonaut",
    img: "https://images-assets.nasa.gov/image/574496main_robonaut2_full/574496main_robonaut2_full~orig.jpg",
    desc: "A humanoid robot designed to work alongside astronauts inside the ISS, assisting with routine or hazardous tasks."
  }
];

export default function Robotics() {
  return (
    <section
      style={{
        padding: "60px",
        background: "linear-gradient(to bottom, #000, #0b3d91)",
        color: "#fff",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>🤖 Robotics on the ISS</h2>
      <p style={{ maxWidth: "800px", margin: "0 auto 50px" }}>
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
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "15px",
              padding: "20px",
              transition: "transform 0.3s, box-shadow 0.3s"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,255,0.6)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
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
                borderRadius: "10px",
                marginBottom: "15px"
              }}
            />
            <h3>{r.name}</h3>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
