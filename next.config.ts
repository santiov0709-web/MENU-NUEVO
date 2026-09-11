import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow connections from the local network IP for mobile testing
  allowedDevOrigins: ['192.168.1.202'],
};

export default nextConfig;
