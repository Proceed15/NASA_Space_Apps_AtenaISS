import React, { useEffect, useRef } from "react";

export default function PanoramicMotion({ src, title }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    let pos = 0;
    let direction = 1;

    const animate = () => {
      if (img) {
        pos += 0.3 * direction; // velocidade do movimento
        if (pos > 100 || pos < -100) direction *= -1; // inverte movimento
        img.style.transform = `translateX(${pos}px)`;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div style={{ overflow: "hidden", borderRadius: "10px", marginBottom: "30px" }}>
      <h3 style={{ color: "white" }}>{title}</h3>
      <img
        ref={imgRef}
        src={src}
        alt={title}
        style={{
          width: "120%",
          transition: "transform 0.2s ease-out",
        }}
      />
    </div>
  );
}
