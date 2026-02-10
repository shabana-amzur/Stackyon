import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brighthub.casethemes.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
