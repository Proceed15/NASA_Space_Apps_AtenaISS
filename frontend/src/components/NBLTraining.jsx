import React from "react";

export default function NBLTraining() {
  return (
    <section style={{ padding: "40px", background: "#111", color: "#fff" }}>
      <h2>🏊 Neutral Buoyancy Lab (NBL)</h2>
      <p>
        Antes de ir ao espaço, astronautas treinam em uma piscina gigante em Houston, no NBL. Ali, eles simulam
        microgravidade e se preparam para spacewalks (EVAs).
      </p>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
         <img
          src="https://images-assets.nasa.gov/image/jsc2005e19183/jsc2005e19183~large.jpg"
          alt="Astronauta no NBL"
          style={{ width: "42%", borderRadius: "10px" }}
        />
        <img
          src="https://images-assets.nasa.gov/image/iss028e020926/iss028e020926~orig.jpg"
          alt="EVA na ISS"
          style={{ width: "42%", borderRadius: "10px" }}
        />
        <img
          src="https://images-assets.nasa.gov/image/JSC-20160921-PH_JNB01_0001/JSC-20160921-PH_JNB01_0001~large.jpg"
          alt="Treinamento NBL"
          style={{ width: "42%", borderRadius: "10px" }}
        />
        <img
            src="https://images-assets.nasa.gov/image/jsc2009e119846/jsc2009e119846~large.jpg"
            alt="Treinamento NBL com astronauta"
            style={{ width: "42%", borderRadius: "10px" }}
        />
    </div>
    </section>
  );
}
