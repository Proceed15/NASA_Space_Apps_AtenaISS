import React from "react";

// ATTENTION: Image URLs have been replaced with public links to ensure loading.
const walks = [
   {
    title: "Solar Panel Installation",
    desc: "Astronauts installed large solar panels, ensuring power for the entire station.",
    img: "https://images-assets.nasa.gov/image/sts082-719-002/sts082-719-002~large.jpg"
   },
  { 
    title: "Station Maintenance",
    desc: "Repair and maintenance missions ensure the safety and operation of the ISS.",
    img: "https://images-assets.nasa.gov/image/iss050e057428/iss050e057428~large.jpg"
  },
  {
    title: "Experiments in Space",
    desc: "Some EVAs are dedicated to installing new external experiments and technologies.",
    img: "https://images-assets.nasa.gov/image/0201584/0201584~large.jpg"
  },
  {
    title: 'Exterior Repairs',
    desc: 'Astronauts perform critical repairs on external ISS equipment during EVAs.',
    img: 'https://images-assets.nasa.gov/image/0701899/0701899~large.jpg'
  },
  {
    title: 'Exploration and Mission',
    desc: 'Astronauts conduct spacewalks to explore and complete vital missions on the ISS.',
    video: 'https://images-assets.nasa.gov/video/ksc_080404_iss/ksc_080404_iss~orig.mp4'
  }
];

export default function SpaceWalks() {
  const containerStyle = {
    height: "500px", 
    overflowY: "scroll", 
    display: "flex",
    flexDirection: "column",
    scrollSnapType: "y mandatory",
    gap: "20px",
    padding: "10px",
    alignItems: "center"
  };

  const cardStyle = {
    scrollSnapAlign: "start", 
    flexShrink: 0,
    width: "280px",
    background: "#1c1c1c",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #333"
  };

  const mediaStyle = {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "10px",
    objectFit: 'cover',
    height: '180px'
  };

  return (
    <section style={{ padding: "40px", background: "#000", color: "#fff" }}>
      <h2>👨‍🚀 Spacewalks (EVAs)</h2>
      <p>
        Extravehicular activities, known as spacewalks, allow astronauts to leave the ISS to perform
        repairs, install new modules, and conduct experiments. Each EVA is the result of intense training at the Neutral
        Buoyancy Lab.
      </p>
      
      <div style={containerStyle}>
        {walks.map((walk, idx) => (
          <div key={idx} style={cardStyle}>
            {/* --- THIS IS THE KEY CHANGE --- */}
            {/* Check if walk.video exists. If yes, render a <video> tag. If not, render an <img> tag. */}
            {walk.video ? (
              <video style={mediaStyle} controls>
                <source src={walk.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={walk.img}
                alt={walk.title}
                style={mediaStyle}
              />
            )}
            <h3>{walk.title}</h3>
            <p>{walk.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
