const path = require("path");

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
};
