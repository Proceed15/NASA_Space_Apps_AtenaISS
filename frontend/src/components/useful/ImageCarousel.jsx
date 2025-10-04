// src/components/ImageCarousel.jsx

import React from 'react';

// Este é um componente de "apresentação". Ele recebe uma lista de imagens e as exibe.
// Ele não se importa com a origem dessas imagens.
export default function ImageCarousel({ images }) {
  const containerStyles = {
    display: 'flex',
    overflowX: 'scroll',
    scrollSnapType: 'x mandatory', // Efeito de "travar" o scroll em cada item
    padding: '20px 0',
    gap: '15px', // Espaçamento entre os itens
  };

  const itemStyles = {
    flex: '0 0 70vw', // Cada item ocupará 70% da largura da tela e não vai encolher
    maxWidth: '300px', // Largura máxima para cada item
    height: '200px',
    scrollSnapAlign: 'start', // Alinha o item no início do container ao "travar"
    borderRadius: '12px',
    objectFit: 'cover', // Garante que a imagem cubra o espaço sem distorcer
  };

  // Se não houver imagens ou a lista estiver vazia, não renderiza nada.
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div style={containerStyles}>
      {images.map((image) => (
        <img
          key={image.id} // A 'key' é essencial para o React identificar cada item
          src={image.src}
          alt={image.alt}
          style={itemStyles}
        />
      ))}
    </div>
  );
}
