import React from "react";

const experiments = [
  {
    title: "Protein Crystals",
    desc: "Studying crystal growth in microgravity helps create new medicines.",
    //img: "https://images-assets.nasa.gov/image/iss059e001564/iss059e001564~orig.jpg"
    img: "https://images-assets.nasa.gov/image/jsc2022e031226/jsc2022e031226~small.jpg"
  },
  {
    title: "Plants in Space",
    desc: "Microgravity cultivation research helps develop more resilient agriculture.",
    img: "https://images-assets.nasa.gov/image/KSC-20181127-PH_JBS01_0013/KSC-20181127-PH_JBS01_0013~large.jpg"
    //img: "https://images-assets.nasa.gov/image/iss040e090540/iss040e090540~orig.jpg"
  },
  {
    title: "Combustion",
    desc: "Studies on fire in space help improve fuels and safety on Earth.",
    img: "https://images-assets.nasa.gov/image/KSC-98pc1850/KSC-98pc1850~medium.jpg"
  },
  {
    title: "Fluid Physics",
    desc: "Experiments with fluids in microgravity reveal new behaviors and applications.",
    video: "https://images-assets.nasa.gov/video/KSC-20191113-MH-CMS01_0001-ISS_Slosh_Tank_Research_Feature-3234338/KSC-20191113-MH-CMS01_0001-ISS_Slosh_Tank_Research_Feature-3234338~large.mp4"
  }
];

export default function Experiments() {
  return (
    <section style={{ padding: "40px", background: "#111", color: "#fff" }}>
      <h2>🔬 Science and Technology</h2>
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
