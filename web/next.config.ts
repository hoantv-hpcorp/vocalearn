import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/pack",
        destination: "/pack/meetings-and-pushback",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
