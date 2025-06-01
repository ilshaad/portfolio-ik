/** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   // async rewrites() {
//   //   return {
//   //     afterFiles: [{ source: "/:path*", destination: "/_404/:path*" }],
//   //   };
//   // },
//   // async rewrites() {
//   //   return [
//   //     {
//   //       source: "/:path*",
//   //       destination: "/",
//   //     },
//   //   ];
//   // },
// };

// module.exports = nextConfig;

// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     reactStrictMode: true,
//     swcMinify: true,
//   },
// });

// * this is the upgrade symtax for 'next-pwa@5.6.0'
const withPWA = require("next-pwa")({
  dest: "public",
});

// module.exports = withPWA({
//   // next.js config
//   reactStrictMode: true,
//   // swcMinify: true,
// });
