/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF → WebP → JPEG (автоматически)
    formats: ['image/avif', 'image/webp'],
    // Responsive breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Долгий кэш для оптимизированных изображений
    minimumCacheTTL: 31536000, // 1 год
    // Качество по умолчанию
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Brotli/GZIP сжатие
  compress: true,
  // Оптимизация производительности
  swcMinify: true,
  // Прогрессивные web apps
  poweredByHeader: false,
};

export default nextConfig;

