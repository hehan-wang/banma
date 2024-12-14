import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 's2.loli.net'
    }]
  },
};

export default nextConfig;
