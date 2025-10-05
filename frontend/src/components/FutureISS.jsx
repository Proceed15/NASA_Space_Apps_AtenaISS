import React from "react";

export default function FutureISS() {
  return (
    <section style={{ padding: "40px", background: "#111", color: "#fff" }}>
      <h2>🔮 The Future of the ISS</h2>
      <p>
        The ISS continues to operate as the largest orbiting laboratory. In the future, new private stations and missions
        to the Moon and Mars will continue the legacy of the ISS as the ultimate symbol of human cooperation in space.
      </p>
      <img
        src="https://images-assets.nasa.gov/image/PIA23920/PIA23920~large.jpg"
        alt="The ISS in space"
        style={{ width: "80%", borderRadius: "10px", marginTop: "20px" }}
      />
    </section>
  );
}
