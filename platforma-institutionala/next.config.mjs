/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Publicat pe mihaitery.github.io/MC-PROJECT
  basePath: '/MC-PROJECT',
}

export default nextConfig
