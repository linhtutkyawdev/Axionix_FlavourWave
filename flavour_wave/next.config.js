/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/img/*",
      },
      {
        hostname: "localhost:8000",
        port: "",
        pathname: "/storage/product-images/*",
      },
    ],
  },
};

module.exports = nextConfig;
