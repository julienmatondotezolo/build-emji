/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true, // React 19 Compiler
    ppr: true, // Partial Pre-rendering
    dynamicIO: true, // Dynamic IO optimization
  },
  // Enable modern bundling
  bundlePagesRouterDependencies: true,
  
  // Image optimization
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Redirects for better UX
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig