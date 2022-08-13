const path = require("path");

module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
