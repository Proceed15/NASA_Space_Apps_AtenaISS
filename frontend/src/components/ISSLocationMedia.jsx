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
    const interval = setInterval(fetchISS, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ padding: "40px", background: "#222", color: "#fff" }}>
      <h2>🛰️ ISS Hoje</h2>
      {position ? (
        <>
          <p>
            Latitude: {position.latitude.toFixed(2)} | Longitude:{" "}
            {position.longitude.toFixed(2)}
          </p>
          <iframe
            width="100%"
            height="300"
            src={`https://maps.google.com/maps?q=${position.latitude},${position.longitude}&z=4&output=embed`}
            style={{ borderRadius: "10px" }}
          ></iframe>
        </>
      ) : (
        <p>Carregando posição...</p>
      )}
    </section>
  );
}
