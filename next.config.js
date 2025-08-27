/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // ✅ allow Unsplash
      },
      {
        protocol: "https",
        hostname: "yourcdn.com", // ✅ if you add more later
      },
    ],
  },
};

module.exports = nextConfig;
