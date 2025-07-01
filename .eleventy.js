// .eleventy.js  – configuração do Eleventy
module.exports = function (eleventyConfig) {
  /* ------------------------------------------------------------------
     Filtro “number” → formata valores numéricos usando toLocaleString()
     Uso no template:
       {{ 1234.567 | number(2, "pt-BR") }}  →  1.234,57
  ------------------------------------------------------------------ */
  eleventyConfig.addFilter(
    "number",
    (value, digits = 2, locale = "pt-BR") =>
      Number(value).toLocaleString(locale, {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
      })
  );

  /* Se já havia outras configurações, mantenha aqui ↓ */
  // Copia estáticos
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["njk", "html", "md", "11ty.js"],
  };
};
