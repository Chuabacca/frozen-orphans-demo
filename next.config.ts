import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  images: {
    unoptimized: true,
  },
  // basePath: "/frozen-orphans-demo", // Uncomment and update if deploying to a subdirectory
};

export default nextConfig;
