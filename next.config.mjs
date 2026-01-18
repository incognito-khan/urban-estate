/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["@prisma/client"], // not experimental anymore
};

export default nextConfig;
