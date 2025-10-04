function HorizontalScrollGallery() {
  const containerStyles = {
    display: 'flex',       // Alinha os itens lado a lado
    overflowX: 'scroll',   // Adiciona o scroll horizontal
    padding: '10px',
    border: '2px solid #555',
    backgroundColor: '#333'
  };

  const itemStyles = {
    flex: '0 0 200px', // Faz com que cada item tenha 200px de largura e não encolha
    height: '150px',
    marginRight: '10px',
    backgroundColor: 'skyblue',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black'
  };

  return (
    <div>
      <h3>Galeria com Scroll Lateral</h3>
      <div style={containerStyles}>
        <div style={itemStyles}>Item 1</div>
        <div style={itemStyles}>Item 2</div>
        <div style={itemStyles}>Item 3</div>
        <div style={itemStyles}>Item 4</div>
        <div style={itemStyles}>Item 5</div>
        <div style={itemStyles}>Item 6</div>
      </div>
    </div>
  );
}

export default HorizontalScrollGallery;