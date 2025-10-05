// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  // --- Estilos para o componente ---

  const heroSectionStyle = {
    display: 'flex', // A MÁGICA: ativa o Flexbox para alinhar os itens lado a lado
    alignItems: 'center', // Centraliza os itens verticalmente
    justifyContent: 'space-between', // Coloca um espaço máximo entre os dois itens
    padding: '60px 40px',
    backgroundColor: '#1a1a1a', // Fundo escuro como na referência
    color: '#fff',
    gap: '40px', // Espaço entre o texto e a imagem
  };

  const textContainerStyle = {
    flex: 1, // Permite que o container de texto cresça
    maxWidth: '50%', // Limita a largura a 50%
  };

  const imageContainerStyle = {
    flex: 1, // Permite que o container da imagem cresça
    maxWidth: '50%',
    maxHeight: '380px',
    overflow: 'hidden',
  };

  const imageStyle = {
    height: '400px', // Altura fixa para a imagem
    borderRadius: '15px', // Bordas arredondadas como na referência
    display: 'block',
    botton: '-15px',
  };

  const titleStyle = {
    fontSize: '3.5rem',
    marginBottom: '20px',
    lineHeight: '1.1',
  };

  const subtitleStyle = {
    fontSize: '1.1rem',
    marginBottom: '30px',
    color: '#ccc',
  };

  const buttonStyle = {
    backgroundColor: '#e67e22', // Laranja similar ao da referência
    color: '#fff',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  // --- Estrutura JSX do componente ---
  return (
    <section style={heroSectionStyle}>
      {/* Coluna da Esquerda: Textos e Botão */}
      <div style={textContainerStyle}>
        <h1 style={titleStyle}>Um Legado Escrito Nas Estrelas</h1>
        <p style={subtitleStyle}>
          A Estação Espacial Internacional representa o auge da colaboração e
          engenharia humana, orbitando a Terra como um farol de descoberta.
        </p>
        <button style={buttonStyle}>Saiba Mais</button>
      </div>

      {/* Coluna da Direita: Imagem */}
      <div style={imageContainerStyle}>
        <img
          src="https://images-assets.nasa.gov/image/s130e006575/s130e006575~large.jpg?w=1920&h=1311&fit=clip&crop=faces%2Cfocalpoint"
          alt="Estação Espacial Internacional orbitando a Terra"
          style={imageStyle}
        />
      </div>
    </section>
  );
}
