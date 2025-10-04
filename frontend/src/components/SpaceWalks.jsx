import React from "react";

// ATENÇÃO: As URLs das imagens foram trocadas por links públicos para garantir o carregamento.
const walks = [
   {
    title: "Instalação de Painéis Solares",
    desc: "Astronautas instalaram grandes painéis solares, garantindo energia para toda a estação.",
    img: "https://images-assets.nasa.gov/image/sts082-719-002/sts082-719-002~large.jpg"
   },
  { 
    title: "Manutenção da Estação",
    desc: "Missões de reparo e manutenção asseguram a segurança e o funcionamento da ISS.",
    img: "https://images-assets.nasa.gov/image/iss050e057428/iss050e057428~large.jpg"
  },
  {
    title: "Experimentos no Espaço",
    desc: "Algumas EVAs são dedicadas à instalação de novos experimentos e tecnologias externas.",
    img: "https://images-assets.nasa.gov/image/0201584/0201584~large.jpg"
  },
  {
    title: 'Reparos no Exterior',
    desc: 'Astronautas realizam reparos críticos em equipamentos externos da ISS durante EVAs.',
    img: 'https://images-assets.nasa.gov/image/0701899/0701899~large.jpg'
  },
  {
    title: 'Exploração e Missão',
    desc: 'Astronautas realizam caminhadas espaciais para explorar e completar missões vitais na ISS.',
    video: 'https://images-assets.nasa.gov/video/ksc_080404_iss/ksc_080404_iss~orig.mp4'
  }
];

export default function SpaceWalks() {
  const containerStyle = {
    height: "500px", 
    overflowY: "scroll", 
    display: "flex",
    flexDirection: "column",
    scrollSnapType: "y mandatory",
    gap: "20px",
    padding: "10px",
    alignItems: "center"
  };

  const cardStyle = {
    scrollSnapAlign: "start", 
    flexShrink: 0,
    width: "280px",
    background: "#1c1c1c",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #333"
  };

  const mediaStyle = {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "10px",
    objectFit: 'cover',
    height: '180px'
  };

  return (
    <section style={{ padding: "40px", background: "#000", color: "#fff" }}>
      <h2>👨‍🚀 Spacewalks (EVAs)</h2>
      <p>
        As atividades extraveiculares, conhecidas como spacewalks, permitem que astronautas deixem a ISS para realizar
        reparos, instalar novos módulos e conduzir experimentos. Cada EVA é fruto de intenso treinamento no Neutral
        Buoyancy Lab.
      </p>
      
      <div style={containerStyle}>
        {walks.map((walk, idx) => (
          <div key={idx} style={cardStyle}>
            {/* --- THIS IS THE KEY CHANGE --- */}
            {/* Check if walk.video exists. If yes, render a <video> tag. If not, render an <img> tag. */}
            {walk.video ? (
              <video style={mediaStyle} controls>
                <source src={walk.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={walk.img}
                alt={walk.title}
                style={mediaStyle}
              />
            )}
            <h3>{walk.title}</h3>
            <p>{walk.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}