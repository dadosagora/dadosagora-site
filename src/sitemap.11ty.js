module.exports = {
  // 🗂️ Metadados que o Eleventy lê ANTES de renderizar
  data: {
    // Caminho final do arquivo no _site
    permalink: "/sitemap.xml",
    // Não entra em collections
    eleventyExcludeFromCollections: true,
    // Sem layout
    layout: null
  },

  // 🔄 Função que gera o XML já com as collections prontas
  render({ collections }) {
    const hostname = "https://convertepramim.com.br";

    // Coleção de todas as páginas processadas
    const pages = (collections.all || []).filter(
      (p) => p.url && !p.url.includes("404")
    );

    // Constrói o XML
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => `<url><loc>${hostname}${p.url}</loc></url>`)
  .join("")}
</urlset>`;
  }
};
