/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },

  // This will bypass TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },

  // This will bypass ESLint errors (works with type inference)
  eslint: {
    ignoreDuringBuilds: true,
  },

  swcMinify: true,
};

export default nextConfig;