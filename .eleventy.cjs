module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src",        // todos os arquivos fonte estão em src/
      includes: "_includes", // layouts ficam em src/_includes
      data: "_data",         // dados (JSON, JS) em src/_data
      output: "_site"        // pasta de saída
    }
  };
};
