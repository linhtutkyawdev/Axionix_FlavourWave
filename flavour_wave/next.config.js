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
        hostname: "flavourwave.up.railway.app",
        port: "",
        pathname: "/storage/product-images/*",
      },
    ],
  },
};

module.exports = nextConfig;
