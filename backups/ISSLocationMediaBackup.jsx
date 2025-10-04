// src/components/ISSLocationMedia.jsx
import React, { useEffect, useState } from "react";

export default function ISSLocationMedia() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    async function fetchISS() {
      const res = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
      const data = await res.json();
      setPosition(data);
    }
    fetchISS();
    const interval = setInterval(fetchISS, 10000); // atualiza a cada 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>🌍 Posição Atual da ISS</h2>
      {position ? (
        <>
          <p>Latitude: {position.latitude.toFixed(2)} | Longitude: {position.longitude.toFixed(2)}</p>
          <iframe
            width="100%"
            height="300"
            src={`https://maps.google.com/maps?q=${position.latitude},${position.longitude}&z=4&output=embed`}
          ></iframe>
          <p>Veja imagens da Terra parecidas com esta vista:</p>
          <img
            src="https://images-assets.nasa.gov/image/iss059e119328/iss059e119328~orig.jpg"
            alt="Exemplo da visão da ISS"
            width="100%"
          />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
