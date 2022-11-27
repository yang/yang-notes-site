/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:splat(.*)",
        destination: "https://pastoral-hospital-8a4.notion.site/:splat", // Matched parameters can be used in the destination
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
