module.exports = {
  // Gera _site/sitemap.xml (arquivo, não pasta)
  permalink: "sitemap.xml",
  // ── se preferir com barra na raiz, use: permalink: "/sitemap.xml",

  eleventyExcludeFromCollections: true,
  layout: null,
  contentType: "application/xml",

  // <render> recebe as collections após o Eleventy processar tudo
  render({ collections }) {
    const hostname = "https://convertepramim.com.br";
    const pages = collections.all || [];

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    const url = page.url || page.data?.page?.url;
    if (!url || url.includes("404")) return "";
    return `<url><loc>${hostname}${url}</loc></url>`;
  })
  .join("")}
</urlset>`;
  }
};
