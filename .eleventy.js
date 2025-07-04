// .eleventy.js
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

  /* -------------------------------------------------
   * Filtro | date
   * Uso:
   *   {{ "now" | date }}              -> 2025
   *   {{ someDate | date("dd/LL/yyyy") }} -> 03/07/2025
   * -------------------------------------------------*/
  eleventyConfig.addFilter("date", (value = "now", format = "yyyy") => {
    const dt =
      value === "now"
        ? DateTime.local()
        : DateTime.fromJSDate(value instanceof Date ? value : new Date(value));

    return dt.setLocale("pt-BR").toFormat(format);
  });

  /* --- Qualquer outra configuração que você já tenha --- */
  eleventyConfig.setQuietMode(true);

  return {
    dir: {
      input:    "src",
      includes: "_includes",
      data:     "_data",
      output:   "_site"
    }
  };
};
