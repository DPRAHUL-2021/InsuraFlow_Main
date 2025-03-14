/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "img.freepik.com",
      "cdn.impossibleimages.ai",
      "st2.depositphotos.com",
      "images.unsplash.com",
      "plus.unsplash.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disables ESLint checks during build
  },
};

module.exports = nextConfig;
