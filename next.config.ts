import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production";
const isProd = "production";
const repositoryName = "ThanhTrucCoreCompetencies";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: isProd ? `/${repositoryName}` : "",
  assetPrefix: isProd ? `/${repositoryName}/` : "",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  cacheComponents: false,
  partialPrefetching: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
