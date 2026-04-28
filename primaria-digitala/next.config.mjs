/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Dacă publici pe username.github.io/nume-repo, decomentează și modifică:
  // basePath: '/nume-repo',
}

export default nextConfig
