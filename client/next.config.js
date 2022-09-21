/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;

// pwa
// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     runtimeCaching,
//   },
// });
