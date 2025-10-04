import React from "react";

const experiments = [
  {
    title: "Cristais de Proteínas",
    desc: "Estudo do crescimento de cristais em microgravidade ajuda a criar novos medicamentos.",
    //img: "https://images-assets.nasa.gov/image/iss059e001564/iss059e001564~orig.jpg"
    img: "https://images-assets.nasa.gov/image/jsc2022e031226/jsc2022e031226~small.jpg"
  },
  {
    title: "Plantas no Espaço",
    desc: "Pesquisas de cultivo em microgravidade ajudam a desenvolver agricultura mais resiliente.",
    img: "https://images-assets.nasa.gov/image/KSC-20181127-PH_JBS01_0013/KSC-20181127-PH_JBS01_0013~large.jpg"
    //img: "https://images-assets.nasa.gov/image/iss040e090540/iss040e090540~orig.jpg"
  },
  {
    title: "Combustão",
    desc: "Estudos sobre fogo no espaço ajudam a melhorar combustíveis e segurança na Terra.",
    img: "https://images-assets.nasa.gov/image/KSC-98pc1850/KSC-98pc1850~medium.jpg"
  },
  {
    title: "Física de Fluidos",
    desc: "Experimentos com fluidos em microgravidade revelam novos comportamentos e aplicações.",
    video: "https://images-assets.nasa.gov/video/KSC-20191113-MH-CMS01_0001-ISS_Slosh_Tank_Research_Feature-3234338/KSC-20191113-MH-CMS01_0001-ISS_Slosh_Tank_Research_Feature-3234338~large.mp4"
  }
];

export default function Experiments() {
  return (
    <section style={{ padding: "40px", background: "#111", color: "#fff" }}>
      <h2>🔬 Ciência e Tecnologia</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {experiments.map((exp, idx) => (
          <div
            key={idx}
            style={{
              width: "250px",
              border: "1px solid #333",
              borderRadius: "10px",
              padding: "10px",
              background: "#1c1c1c"
            }}
          >{exp.video ? (
            <video controls width="100%" style={{ borderRadius: "10px", height: "333px", width: "233px" }}>
              <source src={exp.video} type="video/mp4" />
            </video>
          ) : (
            <img src={exp.img} alt={exp.title} width="100%" style={{ borderRadius: "10px", height: "333px", width: "233px" }} />
          )}
            <h3>{exp.title}</h3>
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
