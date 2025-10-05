// frontend/src/components/MediaGallery.jsx
import React from "react";

const media = [
  {
    type: "image",
    src: "https://images-assets.nasa.gov/image/KSC-98pc1850/KSC-98pc1850~medium.jpg",
    title: "Endeavour Arriving after a Successful Mission"
  },
  {
    type: "image",
    src: "https://images-assets.nasa.gov/image/iss062e005579/iss062e005579~orig.jpg",
    title: "ISS view from space"
  },
  {
    type: "image",
    src: "https://images-assets.nasa.gov/image/iss040e078968/iss040e078968~large.jpg",
    title: "Sunset view from ISS"
  }
];

export default function MediaGallery() {
  return (
    <div style={{ display: "grid", gap: "20px" }}>
      {media.map((item, idx) =>
        item.type === "image" ? (
          <div key={idx}>
            <h3>{item.title}</h3>
            <img src={item.src} alt={item.title} width="100%" />
          </div>
        ) : (
          <div key={idx}>
            <h3>{item.title}</h3>
            <video controls width="100%">
              <source src={item.src} type="video/mkv" />
            </video>
          </div>
        )
      )}
    </div>
  );
}
