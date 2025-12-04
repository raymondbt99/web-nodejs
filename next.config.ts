/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // ✅ ALLOW SEMUA DOMAIN HTTPS
      },
      {
        protocol: 'http', 
        hostname: '**', // ✅ ALLOW SEMUA DOMAIN HTTP (local development)
      },
    ],
    // Optional: tambah config untuk better performance
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;