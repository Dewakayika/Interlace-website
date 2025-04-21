/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['interlace-cms.onrender.com'], // Allow images from interlace-cms.onrender.com
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'interlace-cms.onrender.com',
        pathname: '/uploads/**', // Allow images from /uploads/** path
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Standard device sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Custom image sizes
  },
  // Ensure all images are properly handled
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i, // Handle image file types
      type: 'asset/resource', // Use asset/resource for image handling
    });
    return config;
  },
};

module.exports = nextConfig;