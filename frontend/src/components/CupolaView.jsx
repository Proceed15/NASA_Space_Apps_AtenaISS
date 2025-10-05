// src/components/CupulaView.jsx

import React, { useState, useEffect } from 'react';
import { searchImages } from '../services/nasaApi'; // Import your API function
import ImageCarousel from './useful/ImageCarousel'; // Import the carousel we created

export default function CupulaView() {
  const [cupolaImages, setCupolaImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCupolaImages = async () => {
      try {
        const items = await searchImages('Cupola Earth View');

        if (items && items.length > 0) {
          // 1. Gets the first 6 results
          const firstSixItems = items.slice(0, 8);

          // 2. Transforms the data to the format that ImageCarousel expects
          const formattedImages = firstSixItems.map((item) => ({
            id: item.data[0].nasa_id, // Unique ID for React's 'key'
            src: item.links[0].href, // The preview image URL
            alt: item.data[0].title, // The alternative text
          }));

          setCupolaImages(formattedImages);
        }
      } catch (error) {
        console.error('Error fetching Cupola images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCupolaImages();
  }, []);

  return (
    <section style={{ padding: '40px', background: '#111', color: '#fff' }}>
      <h2>🔭 Cupola View</h2>
      <p>The Cupola offers the most spectacular view of Earth from the ISS.</p>
      
      {loading ? (
        <p>Loading images...</p>
      ) : (
        <ImageCarousel images={cupolaImages} />
      )}
    </section>
  );
}
