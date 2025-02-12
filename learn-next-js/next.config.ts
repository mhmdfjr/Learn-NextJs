/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "ik.imagekit.io",
        hostname: "catharsisbrand.com"
        // port: "",
      },
    ],
  },
};

export default nextConfig;