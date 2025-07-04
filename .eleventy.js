// .eleventy.js
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  /* -----------------------------------------
   * Filtro: date
   * Uso: {{ "now" | date("yyyy") }}  → 2025
   * --------------------------------------- */
  eleventyConfig.addFilter("date", (value = "now", format = "yyyy") => {
    const dt =
      value === "now"
        ? DateTime.local()
        : DateTime.fromJSDate(value instanceof Date ? value : new Date(value));

    return dt.setLocale("pt-BR").toFormat(format);
  });

  /* -----------------------------------------
   * Filtro: number
   * Uso: {{ 1234.567 | number(2,"pt-BR") }} → 1.234,57
   * --------------------------------------- */
  eleventyConfig.addFilter(
    "number",
    (value = 0, digits = 2, locale = "pt-BR") =>
      Number(value).toLocaleString(locale, {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
      })
  );

  /* Menos barulho nos logs */
  eleventyConfig.setQuietMode(true);

  /* Diretórios do projeto */
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
