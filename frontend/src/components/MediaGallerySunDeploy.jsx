// src/components/MediaGallerySunDeploy.jsx
import React from "react";

const media = [
  {
    src: "https://images-assets.nasa.gov/image/iss062e005579/iss062e005579~orig.jpg",
    title: "ISS from Space"
  },
  {
    src: "https://images-assets.nasa.gov/image/0202489/0202489~large.jpg",
    title: "Sunset from ISS"
  },
  {
    src: "https://images-assets.nasa.gov/image/iss040e025613/iss040e025613~large.jpg",
    title: "Aurora from ISS"
  }
];

export default function MediaGallerySunDeploy() {
  // durations (seconds) — change these to tune the rhythm
  const ORBIT_DURATION = 20; // time for one full orbit
  const SPIN_DURATION = 4;   // time for one full self-spin

  const radius = 150; // orbit radius in px
  const size = 120;   // thumbnail width in px

  return (
    <div style={{ position: "relative", width: "420px", height: "420px", margin: "50px auto" }}>
      {/* Rotating ring: orbits everything */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          border: "2px dashed rgba(255, 255, 255, 0.3)",
          pointerEvents: "none", // allow clicks to pass through
          animation: `orbit ${ORBIT_DURATION}s linear infinite`,
          willChange: "transform"
        }}
      >
        {media.map((item, idx) => {
          // evenly place items around the circle
          const angle = (idx / media.length) * 360;

          return (
            <div
              key={idx}
              // this div both positions the item around the circle AND keeps it oriented
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                // rotate(angle) place it, translate(radius) move it out, rotate(-angle) to avoid initial tilt
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                transformOrigin: "center",
                textAlign: "center",
                pointerEvents: "auto"
              }}
            >
              {/* orient: counter-rotates to cancel the ring rotation (keeps the item 'upright' overall)
                  then the image inside can spin on its own.
              */}
              <div
                style={{
                  display: "inline-block",
                  transformOrigin: "center",
                  animation: `counterRotate ${ORBIT_DURATION}s linear infinite`,
                  willChange: "transform"
                }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    //width: `${size}px`,
                    width: "50px",                    
                    //height: `${Math.round((size * 2) / 3)}px`,
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.6)",
                    display: "block",
                    // this is the self-spin animation (independent rhythm)
                    animation: `spinSelf ${SPIN_DURATION}s linear infinite`
                  }}
                />
                <div style={{ color: "white", fontSize: "0.75rem", marginTop: "8px", maxWidth: `${size}px` }}>
                  {item.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* center "sun" */}
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
          boxShadow: "0 0 30px #ff8800"
        }}
      />

      {/* animations */}
      <style>{`
        @keyframes orbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        /* Counter-rotate exactly opposite to orbit so the item stays upright relative to viewport */
        @keyframes counterRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        /* Self-spin of the image (independent rhythm) */
        @keyframes spinSelf {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
