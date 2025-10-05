import React from "react";

const floatingStyle = {
  width: "488px",
  animation: "float 6s ease-in-out infinite"
};

export default function MicroGravitySim() {
  return (
    <section style={{ padding: "40px", background: "#222", color: "#fff" }}>
      <h2>🌀 Vida em Microgravidade</h2>
      <p>
        Na ISS, tudo flutua: água, fogo, ferramentas e até pessoas. Isso permite pesquisas científicas únicas
        impossíveis na Terra.
      </p>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
        <img
          src="https://images-assets.nasa.gov/image/iss065e096014/iss065e096014~large.jpg"
          alt="Experimento em microgravidade"
          style={floatingStyle}
        />
        <img
          src="https://images-assets.nasa.gov/image/iss009e29620/iss009e29620~large.jpg"
          alt="Astronauta flutuando na ISS"
          style={floatingStyle}
        />
      </div>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </section>
  );
}
