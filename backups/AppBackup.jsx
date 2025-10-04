// src/App.jsx
import React from "react";
import ISSLocationMedia from "../frontend/src/components/ISSLocationMedia";
import ISSTimeline from "../frontend/src/components/ISSTimeline";
import MediaGallery from "../frontend/src/components/MediaGalllery";
import Experiments from "../frontend/src/components/Experiments";
import BackgroundVideo from "../frontend/src/components/BackgroundVideo";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#222" }}>
      {/* Cabeçalho */}
      <header style={{ textAlign: "center", padding: "20px", background: "#0b3d91", color: "white" }}>
        <h1>🚀 ISS Legacy Explorer</h1>
        <p>25 anos de história da Estação Espacial Internacional</p>
      </header>

      {/* Seção com vídeo de fundo */}
      <BackgroundVideo />

      {/* Posição atual + imagens */}
      <section style={{ padding: "40px", background: "#f5f5f5" }}>
        <ISSLocationMedia />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a href="https://www.nasa.gov/mission_pages/station/main/index.html" target="_blank" rel="noopener noreferrer" style={{ color: "#0b3d91", textDecoration: "none", fontWeight: "bold" }}>
            Saiba mais sobre a ISS na NASA
          </a>
        </div>
      </section>

      {/* Linha do tempo */}
      <section style={{ padding: "40px" }}>
        <ISSTimeline />
      </section>

      {/* Galeria multimídia */}
      <section style={{ padding: "40px", background: "#f5f5f5" }}>
        <h2>🎥 Galeria da ISS</h2>
        <MediaGallery />
      </section>

      {/* Experimentos */}
      <section style={{ padding: "40px" }}>
        <Experiments />
      </section>

      {/* Rodapé */}
      <footer style={{ textAlign: "center", padding: "20px", background: "#0b3d91", color: "white" }}>
        <p>🌍 NASA Space Apps Challenge - 25 Anos da ISS</p>
      </footer>
    </div>
  );
}

export default App;
