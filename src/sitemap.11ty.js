module.exports = {
  // Caminho final deve ser exatamente /sitemap.xml
  permalink: "/sitemap.xml",
  // Garante que o Eleventy trate como arquivo .xml
  outputFileExtension: "xml",

  eleventyExcludeFromCollections: true,
  layout: null,
  contentType: "application/xml",

  // O Eleventy injeta as collections aqui
  render({ collections }) {
    const hostname = "https://convertepramim.com.br";
    const pages = collections.all || [];

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    // Usa page.url ou page.data.page.url (caso esteja no front-matter)
    const url = page.url || page.data?.page?.url;
    // Ignora páginas 404 ou sem URL renderizada
    if (!url || url.includes("404")) return "";
    return `<url><loc>${hostname}${url}</loc></url>`;
  })
  .join("")}
</urlset>`;
  }
};
