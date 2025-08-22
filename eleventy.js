// .eleventy.cjs (na raiz do repo)
module.exports = function (eleventyConfig) {
  // Copia arquivos estáticos (CSS, imagens, JS) de src/assets para _site/assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html", "11ty.js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
