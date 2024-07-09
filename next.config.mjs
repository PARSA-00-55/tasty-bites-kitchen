/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "htmlbeans.com",
      },
      {
        protocol: "http",
        hostname: "via.placeholder.com",
      },
    ],
  },
};

export default nextConfig;
