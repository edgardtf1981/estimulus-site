const path = require('path');
const webpack = require('webpack');

// Polyfill global para 'self' no servidor - executado ANTES de qualquer coisa
// Isso deve ser definido no nível mais alto possível
if (typeof global !== 'undefined') {
  if (typeof global.self === 'undefined') {
    global.self = global;
  }
  if (typeof globalThis !== 'undefined' && typeof globalThis.self === 'undefined') {
    globalThis.self = globalThis;
  }
  // Garantir que self existe em todos os contextos
  if (typeof self === 'undefined') {
    global.self = global;
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  
  // Otimizações de performance
  experimental: {
    // Desabilitado temporariamente para resolver erro de build
    // optimizeCss: true,
    // optimizePackageImports: ['@heroicons/react', '@headlessui/react'],
  },

  // Configuração de imagens
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
          },
        ],
      },
    ];
  },

  // Webpack customization - Simplificado para evitar quebrar o runtime
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Apenas configurações essenciais - sem modificar entry points ou runtime
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    // Aliases para reduzir tamanho do bundle
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };

    return config;
  },

  // Configuração de trailing slash
  trailingSlash: false,
  
  // Configuração de env vars (opcional, apenas se disponíveis)
  env: {
    ...(process.env.VERCEL_ENV && { VERCEL_ENV: process.env.VERCEL_ENV }),
    ...(process.env.VERCEL_URL && { VERCEL_URL: process.env.VERCEL_URL }),
  },
};

module.exports = nextConfig;
