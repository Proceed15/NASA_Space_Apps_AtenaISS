// src/components/CupulaView.jsx

import React, { useState, useEffect } from 'react';
import { searchImages } from '../services/nasaApi'; // Importe sua função da API
import ImageCarousel from './useful/ImageCarousel'; // Importe o carrossel que criamos

export default function CupulaView() {
  const [cupolaImages, setCupolaImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCupolaImages = async () => {
      try {
        const items = await searchImages('Cupola Earth View');

        if (items && items.length > 0) {
          // 1. Pega os 6 primeiros resultados
          const firstSixItems = items.slice(0, 8);

          // 2. Transforma os dados para o formato que o ImageCarousel espera
          const formattedImages = firstSixItems.map((item) => ({
            id: item.data[0].nasa_id, // ID único para a 'key' do React
            src: item.links[0].href, // A URL da imagem de preview
            alt: item.data[0].title, // O texto alternativo
          }));

          setCupolaImages(formattedImages);
        }
      } catch (error) {
        console.error('Erro ao buscar imagens da Cúpula:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCupolaImages();
  }, []);

  return (
    <section style={{ padding: '40px', background: '#111', color: '#fff' }}>
      <h2>🔭 Visão da Cúpula</h2>
      <p>A Cúpula oferece a visão mais espetacular da Terra a partir da ISS.</p>
      
      {loading ? (
        <p>Carregando imagens...</p>
      ) : (
        <ImageCarousel images={cupolaImages} />
      )}
    </section>
  );
}