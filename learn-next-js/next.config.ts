/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miraclestore.io",
        port: "",
      },
    ],
  },
};

export default nextConfig;