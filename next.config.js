/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // image hostname config
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
