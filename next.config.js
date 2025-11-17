const path = require('path');
const webpack = require('webpack');

// Polyfill global para 'self' no servidor - executado antes do webpack
if (typeof globalThis !== 'undefined' && typeof globalThis.self === 'undefined') {
  globalThis.self = globalThis;
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

  // Webpack customization
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Resolver problemas com dependências que usam 'self' no servidor
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
      
      // Injetar polyfill no início de cada chunk do servidor
      const polyfillPath = path.resolve(__dirname, 'polyfill-server.js');
      
      // Adicionar como entry point adicional
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await (typeof originalEntry === 'function' ? originalEntry() : originalEntry);
        
        if (typeof entries === 'object' && entries !== null) {
          // Adicionar polyfill a todos os entry points
          for (const key in entries) {
            if (Array.isArray(entries[key])) {
              entries[key].unshift(polyfillPath);
            } else if (typeof entries[key] === 'string') {
              entries[key] = [polyfillPath, entries[key]];
            }
          }
        }
        
        return entries;
      };
    }

    // Definir variáveis globais para compatibilidade
    config.plugins.push(
      new webpack.DefinePlugin({
        'typeof self': JSON.stringify(isServer ? 'undefined' : 'object'),
        'typeof window': JSON.stringify(isServer ? 'undefined' : 'object'),
      })
    );

    // Para servidor: usar plugin customizado para substituir self por globalThis
    if (isServer) {
      const SelfPolyfillPlugin = require('./scripts/webpack-polyfill-plugin');
      config.plugins.push(new SelfPolyfillPlugin());
    }

    // Otimizações de bundle
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          priority: 20,
          reuseExistingChunk: true,
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    };

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
