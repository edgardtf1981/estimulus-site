#!/bin/bash

# Script de deploy otimizado para Vercel
set -e

echo "🚀 Iniciando deploy para Vercel..."

# Verificações pré-deploy
echo "🔍 Executando verificações pré-deploy..."

# Verificar Node.js version
NODE_VERSION=$(node --version)
echo "Node.js version: $NODE_VERSION"

# Verificar npm version
NPM_VERSION=$(npm --version)
echo "npm version: $NPM_VERSION"

# Limpar cache
echo "🧹 Limpando cache..."
rm -rf .next
rm -rf node_modules/.cache
npm cache clean --force

# Instalar dependências
echo "📦 Instalando dependências..."
npm ci

# Verificar tipos TypeScript
echo "🔍 Verificando tipos TypeScript..."
npx tsc --noEmit || echo "⚠️  Aviso: Erros de TypeScript encontrados"

# Verificar build
echo "🔨 Verificando build..."
npm run build

# Verificar tamanho do bundle
echo "📊 Verificando tamanho do bundle..."
if [ -d ".next/static/chunks" ]; then
  BUNDLE_SIZE=$(du -sh .next/static/chunks/ | cut -f1)
  echo "Tamanho do bundle: $BUNDLE_SIZE"
else
  echo "⚠️  Bundle não encontrado"
fi

# Deploy para Vercel
echo "🚀 Fazendo deploy para Vercel..."

if [ "$1" = "production" ]; then
  echo "🎯 Deploy para PRODUÇÃO..."
  vercel --prod --confirm
else
  echo "🔍 Deploy para PREVIEW..."
  vercel --confirm
fi

echo "✅ Deploy concluído com sucesso!"

