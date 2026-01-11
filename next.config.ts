import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true, // React Compiler optimizations
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // allows any HTTPS host
      },
    ],
  },
  typescript: {
    // Optional: allow prod builds even if there are TS errors
    ignoreBuildErrors: false,
  },
};



export default nextConfig;
