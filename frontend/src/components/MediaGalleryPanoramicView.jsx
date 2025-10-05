import React from "react";
import PanoramicMotion from "./useful/PanoramicMotion";

const media = [
  {
    src: "https://images-assets.nasa.gov/image/KSC-98pc1850/KSC-98pc1850~medium.jpg",
    title: "Endeavour Arriving after a Successful Mission"
  },
  {
    src: "https://images-assets.nasa.gov/image/iss062e005579/iss062e005579~orig.jpg",
    title: "ISS view from space"
  },
  {
    src: "https://images-assets.nasa.gov/image/iss040e078968/iss040e078968~large.jpg",
    title: "Sunset from ISS"
  }
];

export default function MediaGalleryPanoramicView() {
  return (
    <div style={{ display: "grid", gap: "20px" }}>
      {media.map((item, idx) => (
        <PanoramicMotion key={idx} src={item.src} title={item.title} />
      ))}
    </div>
  );
}
