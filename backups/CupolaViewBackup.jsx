import React from "react";

export default function CupolaView() {
  return (
    <section style={{ padding: "40px", background: "#000", color: "#fff" }}>
      <h2>🌍 A Cupola: A Janela para a Terra</h2>
      <p>
        Instalada em 2010, a Cupola permite aos astronautas uma visão única do planeta. Além da beleza, ela é usada
        para monitorar a Terra e apoiar operações externas.
      </p>
      <div style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
        <img
          src="https://images-assets.nasa.gov/image/iss059e119328/iss059e119328~orig.jpg"
          alt="Vista da Terra pela Cupola"
          style={{ width: "200%", borderRadius: "10px" }}
        />
      </div>
    </section>
  );
}
