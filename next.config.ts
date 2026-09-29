import path from "node:path";
import type { NextConfig } from "next";

const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  output: "standalone",
  // Fijamos la raíz del workspace para que Turbopack no la infiera mal
  // (el /home/z/node_modules del entorno confunde la detección automática).
  turbopack: {
    root: projectRoot,
  },
  outputFileTracingRoot: projectRoot,
  // Permitimos ambos nombres habituales para el servidor local de desarrollo,
  // además del dominio de vista previa del entorno.
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "*.space-z.ai",
    "preview-chat-b8874d72-d86b-4d0e-84ff-5372768530d0.space-z.ai",
  ],
  // Oculta el indicador visual de Next.js durante el modo de diseño.
  devIndicators: false,
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
