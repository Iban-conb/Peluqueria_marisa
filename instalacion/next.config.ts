import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Permitimos ambos nombres habituales para el servidor local de desarrollo.
  allowedDevOrigins: ["localhost", "127.0.0.1"],
  // Oculta el indicador visual de Next.js durante el modo de diseño.
  devIndicators: false,
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
