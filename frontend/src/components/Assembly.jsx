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
import { searchImages } from "../services/nasaApi"; // Certifique-se que o caminho está correto

export default function Assembly() {
  // Criamos um estado para armazenar a URL da imagem que virá da API
  const [imageUrl, setImageUrl] = useState("");
  // Criamos um estado para controlar a mensagem de carregamento
  const [loading, setLoading] = useState(true);

  // useEffect será executado uma vez, quando o componente for montado na tela
  useEffect(() => {
    // Função para buscar os dados
    const fetchAssemblyImage = async () => {
      try {
        // 1. Chama a função de busca da sua API
        const items = await searchImages("ISS Assembly");

        // 2. Verifica se a busca retornou algum resultado
        if (items && items.length > 0) {
          // 3. Pega o primeiro item e extrai o link de preview.
          // A API retorna uma lista de links para cada imagem. O primeiro (`links[0]`)
          // é o thumbnail, que é sempre acessível publicamente.
          const accessibleUrl = items[0].links[0].href;
          setImageUrl(accessibleUrl);
        }
      } catch (error) {
        console.error("Erro ao buscar imagem da montagem da ISS:", error);
        // Opcional: Colocar uma imagem padrão em caso de erro
        // setImageUrl("/imagem-de-erro.jpg");
      } finally {
        setLoading(false); // Termina o carregamento, com sucesso ou erro
      }
    };

    fetchAssemblyImage();
  }, []); // O array vazio [] garante que isso rode apenas uma vez

  return (
    <section style={{ padding: "40px", background: "#222", color: "#fff" }}>
      <h2>🛠️ Montagem da Estação</h2>
      <p>
        Entre 2000 e 2011, a ISS foi montada em órbita, peça por peça, até se
        tornar o maior laboratório no espaço.
      </p>
      <div style={{ overflowX: "scroll", overflowY: "scroll", whiteSpace: "nowrap" }}>
        {/* Lógica de exibição: */}
        {loading ? (
          <p>Carregando imagem...</p>
        ) : imageUrl ? (
          <img
            src={imageUrl}
            alt="Montagem da Estação Espacial Internacional"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        ) : (
          <p>Não foi possível carregar a imagem.</p>
        )}
      </div>
    </section>
  );
}
// // Compare this snippet from frontend/src/components/ISSTimeline.jsx:
// // src/components/ISSTimeline.jsx