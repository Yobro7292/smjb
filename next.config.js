/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.pexels.com', 'img.freepik.com', 'robohash.org'],
  },
};

module.exports = nextConfig;
