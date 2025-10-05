// src/components/Assembly.jsx
/*import React from "react";

export default function Assembly() {
  return (
    <section style={{ padding: "40px", background: "#222", color: "#fff" }}>
      <h2>🛠️ Montagem da Estação</h2>
      <p>
        Entre 2000 e 2011, a ISS foi montada em órbita, peça por peça, até se tornar o maior laboratório no espaço.
      </p>
      <div style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
        <img
          //src="https://images-assets.nasa.gov/image/iss027e027115/iss027e027115~orig.jpg"
          src="https://www.nasa.gov/wp-content/uploads/2023/04/iss069e005329-1.jpg"
          alt="Vista panorâmica da ISS"
          style={{ width: "200%", borderRadius: "10px" }}
        />
      </div>
    </section>
  );
}*/
// src/components/Assembly.jsx
import React, { useState, useEffect } from "react";
import { searchImages } from "../services/nasaApi"; // Ensure the path is correct

export default function Assembly() {
  // We create a state to store the image URL that will come from the API
  const [imageUrl, setImageUrl] = useState("");
  // We create a state to control the loading message
  const [loading, setLoading] = useState(true);

  // useEffect will run once, when the component is mounted on the screen
  useEffect(() => {
    // Function to fetch data
    const fetchAssemblyImage = async () => {
      try {
        // 1. Calls your API's search function
        const items = await searchImages("ISS Assembly");

        // 2. Checks if the search returned any results
        if (items && items.length > 0) {
          // 3. Gets the first item and extracts the preview link.
          // The API returns a list of links for each image. The first (`links[0]`)
          // is the thumbnail, which is always publicly accessible.
          const accessibleUrl = items[0].links[0].href;
          setImageUrl(accessibleUrl);
        }
      } catch (error) {
        console.error("Error fetching ISS assembly image:", error);
        // Optional: Set a default image in case of error
        // setImageUrl("/imagem-de-erro.jpg");
      } finally {
        setLoading(false); // Ends loading, with success or error
      }
    };

    fetchAssemblyImage();
  }, []); // The empty array [] ensures this runs only once

  return (
    <section style={{ padding: "40px", background: "#222", color: "#fff" }}>
      <h2>🛠️ Station Assembly</h2>
      <p>
        Between 2000 and 2011, the ISS was assembled in orbit, piece by piece, until it became the largest laboratory in space.
      </p>
      <div style={{ overflowX: "scroll", overflowY: "scroll", whiteSpace: "nowrap" }}>
        {/* Display logic: */}
        {loading ? (
          <p>Loading image...</p>
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt="International Space Station Assembly"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        ) : (
          <p>Could not load image.</p>
        )}
      </div>
    </section>
  );
}
// // Compare this snippet from frontend/src/components/ISSTimeline.jsx:
// // src/components/ISSTimeline.jsx
