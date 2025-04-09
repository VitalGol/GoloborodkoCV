/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  basePath: "/GoloborodkoCV",
  reactStrictMode: true,
  images: { unoptimized: true },
  assetPrefix: "/GoloborodkoCV/",
  distDir: "out",
};

module.exports = nextConfig;
