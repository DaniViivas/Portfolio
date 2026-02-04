import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://192.168.0.17',
    'http://192.168.0.17:3000',
  ],
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com', protocol: 'https' },
      { hostname: 'avatars.githubusercontent.com', protocol: 'https' },
      { hostname: 'imgur.com', protocol: 'https' },
      { hostname: 'media2.dev.to', protocol: 'https' },
    ],
  },
};

export default nextConfig;
