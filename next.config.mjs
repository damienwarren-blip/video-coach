/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: ['http://169.254.84.183:3000'], // replace with your actual IP and port
  },
};

export default nextConfig;
