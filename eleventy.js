// eleventy.js
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
    templateFormats: ["njk", "html", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
