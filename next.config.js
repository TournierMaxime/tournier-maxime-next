const path = require("path");
const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");

module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    DOMAIN_NAME: "https://tmnext.tourniermaxime.name",
    EMAIL_PROVIDER: "smtp.orange.fr",
    EMAIL_ADDRESS: "tourniermaxime@orange.fr",
    EMAIL_PASSWORD: "s45o1qAHdVeJL419zy6aP0WI",
  },
  images: {
    loader: "akamai",
    path: "https://tourniermaxime.com",
  },
  /*experimental: {
    images: {
      unoptimized: true,
    },
  },*/
};
