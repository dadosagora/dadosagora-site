// .eleventy.js
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  /* ---------- filtros de data ---------- */
  eleventyConfig.addFilter("date", (value = "now", format = "yyyy") => {
    const dt =
      value === "now"
        ? DateTime.local()
        : DateTime.fromJSDate(value instanceof Date ? value : new Date(value));
    return dt.setLocale("pt-BR").toFormat(format);
  });

  /* ---------- filtros numéricos ---------- */
  eleventyConfig.addFilter(
    "number",
    (value = 0, digits = 2, locale = "pt-BR") =>
      Number(value).toLocaleString(locale, {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
      })
  );

  /* ---------- copia estáticos ---------- */
  eleventyConfig.addPassthroughCopy("src/assets");   // 👉 NOVA LINHA

  /* Menos barulho no console */
  eleventyConfig.setQuietMode(true);

  return {
    dir: {
      input:   "src",
      includes:"_includes",
      data:    "_data",
      output:  "_site",
    },
  };
};
