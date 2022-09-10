/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["naszsklep-api.vercel.app", "media.graphassets.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
