import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.youtube.com"],
    qualities: [100, 75, 50, 25], // optional, but recommended
  }
};

export default nextConfig;
