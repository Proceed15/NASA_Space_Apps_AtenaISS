import React from "react";

const walks = [
  {
    title: "Instalação de Painéis Solares",
    desc: "Astronautas instalaram grandes painéis solares, garantindo energia para toda a estação.",
    img: "https://images-assets.nasa.gov/image/iss028e020926/iss028e020926~orig.jpg"
  },
  {
    title: "Manutenção do Exterior",
    desc: "Missões de reparo e manutenção asseguram a segurança e o funcionamento da ISS.",
    img: "https://images-assets.nasa.gov/image/iss063e053648/iss063e053648~orig.jpg"
  },
  {
    title: "Experimentos no Espaço",
    desc: "Algumas EVAs são dedicadas à instalação de novos experimentos e tecnologias externas.",
    img: "https://images-assets.nasa.gov/image/iss040e090540/iss040e090540~orig.jpg"
  }
];

export default function SpaceWalks() {
  return (
    <section style={{ padding: "40px", background: "#000", color: "#fff" }}>
      <h2>🚶 Spacewalks (EVAs)</h2>
      <p>
        As atividades extraveiculares, conhecidas como spacewalks, permitem que astronautas deixem a ISS para realizar
        reparos, instalar novos módulos e conduzir experimentos. Cada EVA é fruto de intenso treinamento no Neutral
        Buoyancy Lab.
      </p>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
        {walks.map((walk, idx) => (
          <div
            key={idx}
            style={{
              width: "280px",
              background: "#1c1c1c",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #333"
            }}
          >
            <img
              src={walk.img}
              alt={walk.title}
              style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
            />
            <h3>{walk.title}</h3>
            <p>{walk.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
