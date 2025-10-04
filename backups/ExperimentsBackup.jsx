// src/components/Experiments.jsx
import React from "react";

const experiments = [
  {
    title: "Cristais de Proteínas",
    desc: "Estudo do crescimento de cristais em microgravidade.",
    img: "https://images-assets.nasa.gov/image/iss059e001564/iss059e001564~orig.jpg"
  },
  {
    title: "Plantas no Espaço",
    desc: "Experimentos de cultivo de plantas em microgravidade.",
    img: "https://images-assets.nasa.gov/image/iss064e019080/iss064e019080~orig.jpg"
  },
  {
    title: "Combustão em Microgravidade",
    desc: "Testes com fogo e combustíveis em ausência de gravidade.",
    img: "https://images-assets.nasa.gov/image/iss040e090540/iss040e090540~orig.jpg"
  }
];

export default function Experiments() {
  return (
    <div>
      <h2>🔬 Experimentos na ISS</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {experiments.map((exp, idx) => (
          <div key={idx} style={{ width: "250px", border: "1px solid #ccc", borderRadius: "10px", padding: "10px" }}>
            <img src={exp.img} alt={exp.title} width="100%" style={{ borderRadius: "10px" }} />
            <h3>{exp.title}</h3>
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
