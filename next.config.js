/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "completegreet.com", "i.ibb.co", "raw.githubusercontent.com"],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
