module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src",         // onde estão seus arquivos .njk, .css, etc
      includes: "_includes", // subpasta de "src" que contém os layouts
      data: "_data",         // subpasta de "src" com os dados (como rates.json)
      output: "_site"        // pasta gerada com o build final
    }
  };
};
