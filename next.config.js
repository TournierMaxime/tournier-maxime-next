const path = require("path");

module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  /*i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["fr-FR", "en-US"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "fr-FR",
  },*/
};
