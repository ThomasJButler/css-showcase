import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/css-showcase",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
