// .eleventy.js
const { DateTime } = require("luxon");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");   // ← NOVO

module.exports = function (eleventyConfig) {

  /* ---------- filtro de data ---------- */
  eleventyConfig.addFilter("date", (value = "now", format = "yyyy") => {
    const dt =
      value === "now"
        ? DateTime.local()
        : DateTime.fromJSDate(value instanceof Date ? value : new Date(value));
    return dt.setLocale("pt-BR").toFormat(format);
  });

  /* ---------- filtro numérico ---------- */
  eleventyConfig.addFilter("number",
    (value = 0, digits = 2, locale = "pt-BR") =>
      Number(value).toLocaleString(locale, {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
      })
  );

  /* ---------- sitemap.xml ---------- */
  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: "https://convertepramim.com.br",   // seu domínio
    },
  });

  /* ---------- arquivos estáticos ---------- */
  eleventyConfig.addPassthroughCopy("src/assets");     // imagens, css, etc.
  eleventyConfig.addPassthroughCopy("src/robots.txt"); // opcional: robots.txt

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
