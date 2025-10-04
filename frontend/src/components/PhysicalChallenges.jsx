import React from "react";

export default function PhysicalChallenges() {
  return (
    <section style={{ padding: "40px", background: "#111", color: "#fff" }}>
      <h2>💪 Physical Challenges on the ISS</h2>
      <p>
        Life in microgravity brings unique physical challenges. Astronauts must work out daily 
        to stay healthy and counteract muscle and bone loss.
      </p>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "40px" }}>
        {/* Card 1 - smaller, left */}
        <div
          style={{
            width: "220px",
            background: "#1c1c1c",
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #333",
            alignSelf: "flex-end"
          }}
        >
          <img
            src="https://images-assets.nasa.gov/image/iss045e082558/iss045e082558~large.jpg"
            alt="Muscle Training"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
          />
          <h3 style={{ fontSize: "1rem" }}>Muscle Training</h3>
          <p style={{ fontSize: "0.9rem" }}>
            Resistance devices simulate weightlifting, keeping astronauts’ muscles strong.
          </p>
        </div>

        {/* Card 2 - medium, center */}
        <div
          style={{
            width: "260px",
            background: "#1c1c1c",
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #333",
            alignSelf: "center"
          }}
        >
          <img
            src="https://images-assets.nasa.gov/image/iss004e8504/iss004e8504~large.jpg"
            alt="Cardio Exercise"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
          />
          <h3 style={{ fontSize: "1.1rem" }}>Cardio Exercise</h3>
          <p style={{ fontSize: "0.95rem" }}>
            Running on a treadmill while strapped down improves endurance and bone health.
          </p>
        </div>

        {/* Card 3 - largest, right */}
        <div
          style={{
            width: "300px",
            background: "#1c1c1c",
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #333",
            alignSelf: "flex-start"
          }}
        >
          <img
            src="https://images-assets.nasa.gov/image/iss070e009186/iss070e009186~large.jpg"
            alt="Space Cycling"
            style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
          />
          <h3 style={{ fontSize: "1.2rem" }}>Space Cycling</h3>
          <p style={{ fontSize: "1rem" }}>
            Stationary bikes help maintain leg strength and circulation, vital for long missions.
          </p>
        </div>
      </div>

      <p style={{ marginTop: "30px" }}>
        These daily workouts not only protect astronauts in space, but also advance our understanding of
        osteoporosis, muscle atrophy, and cardiovascular health on Earth.
      </p>
    </section>
  );
}
