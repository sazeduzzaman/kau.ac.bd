import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Optional: allow prod builds even if there are TS errors
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.kau.khandkershahed.com",
        pathname: "/**", // allow all images from this domain
      },
    ],
  },
  staticPageGenerationTimeout: 120, // ⬅️ increase build timeout to 120s
};

export default nextConfig;