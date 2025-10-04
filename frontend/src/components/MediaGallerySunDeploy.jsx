import React from "react";

const media = [
  {
    type: "image",
    src: "https://images-assets.nasa.gov/image/iss062e005579/iss062e005579~orig.jpg",
    title: "ISS from Space"
  },
  {
    type: "image",
    src: "https://images-assets.nasa.gov/image/0202489/0202489~large.jpg",
    title: "Sunset from ISS"
  },
  {
    type: "image",
    src: "https://images-assets.nasa.gov/image/iss059e119328/iss059e119328~orig.jpg",
    title: "Aurora from ISS"
  }
];

export default function MediaGallerySunDeploy() {
  return (
    <div
      style={{
        position: "relative",
        width: "400px",
        height: "400px",
        margin: "50px auto",
      }}
    >
      {/* Rotating ring */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          animation: "spin 42s linear infinite",
        }}
      >
        {media.map((item, idx) => {
          const angle = (idx / media.length) * 360;
          const radius = 150;

          return (
            <div
              key={idx}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                textAlign: "center",
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                style={{
                  width: "120px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(255,255,255,0.6)",
                }}
              />
              <p style={{ color: "white", marginTop: "8px" }}>{item.title}</p>
            </div>
          );
        })}
      </div>

      {/* Center "Sun" */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #ffdd00, #ff8800)",
          boxShadow: "0 0 30px #ff8800",
        }}
      ></div>

      {/* CSS keyframes */}
      <style>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
