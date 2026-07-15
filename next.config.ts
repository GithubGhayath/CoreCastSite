import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: isProd ? "/core_cast_web_site" : "",
  assetPrefix: isProd ? "/core_cast_web_site/" : "",
};

export default nextConfig;