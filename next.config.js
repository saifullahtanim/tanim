const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js"],

  // 🔴 IMPORTANT FIX (THIS LINE)
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ["flagcdn.com"], // protocol বাদ দিতে হয়
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },
});

module.exports = nextConfig;
