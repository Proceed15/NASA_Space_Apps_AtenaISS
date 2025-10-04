// src/components/HistoryStart.jsx
import React from "react";
import missionPhoto from '../assets/images/9474342032_7035b4ab6f_o.jpg';
export function MissionImage() 
{
   return <img src={missionPhoto} alt="Primeira tripulação da ISS" />;
}
export default function HistoryStart() 
{
  return (
    <section style={{ padding: "40px", background: "#111", color: "#fff" }}>
      <h2>🚀 O Começo: Lançamento da ISS</h2>
      <p>
        Em 1998, o primeiro módulo, Zarya, foi lançado. A partir daí começou a maior obra de engenharia em órbita da humanidade.
        In 1999, a primeira tripulação, a Expedição 1, chegou à estação, marcando o início de uma presença humana contínua no espaço desde então.
        Em 2000, a Expedição 1, composta pelos astronautas russos Yuri Gidzenko e Sergei Krikalev, e pelo astronauta americano William Shepherd, chegou à estação.
      </p>
      <img
        src="{missionPhoto}"
        alt="Primeira tripulação da ISS"
        style={{ width: "80%", borderRadius: "10px", marginTop: "20px" }}
      />
    </section>
  );
}
// Compare this snippet from frontend/src/components/ISSLocationMedia.jsx:
// // src/components/ISSLocationMedia.jsx