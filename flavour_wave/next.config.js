/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/img/*",
      },
    ],
  },
};

module.exports = nextConfig;
