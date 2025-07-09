module.exports = {
  permalink: "/sitemap.xml",
  eleventyExcludeFromCollections: true,
  layout: null,
  contentType: "application/xml",
  data() {
    return {
      sitemap: this.ctx.collections.all,
      hostname: "https://convertepramim.com.br"
    };
  },
  render({ sitemap, hostname }) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap
  .map((page) => {
    const url = page.url || page.data?.page?.url;
    if (!url || url.includes("404")) return "";
    return `<url><loc>${hostname}${url}</loc></url>`;
  })
  .join("")}
</urlset>`;
  }
};
