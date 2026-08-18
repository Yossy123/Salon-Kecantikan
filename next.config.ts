import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Keep Turbopack scoped to this app when Laragon has a parent lockfile.
    root: __dirname,
  },
};

export default nextConfig;
