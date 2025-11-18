import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const start = Date.now();
  
  // 🔒 PROTEÇÃO: Bloquear acesso à área administrativa sem autenticação
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Verificar se há token de autenticação (implementação básica)
    // Em produção, usar NextAuth.js ou sistema de autenticação robusto
    const authHeader = request.headers.get('authorization');
    const adminToken = request.cookies.get('admin-token');
    
    // Se não houver autenticação, redirecionar para home
    // NOTA: Esta é uma proteção básica. Implementar autenticação adequada antes de produção
    if (!authHeader && !adminToken && process.env.NODE_ENV === 'production') {
      return NextResponse.redirect(new URL('/', request.url));
    }
    
    // Em desenvolvimento, permitir acesso mas logar aviso
    if (process.env.NODE_ENV === 'development') {
      console.warn('⚠️ ACESSO À ÁREA ADMIN SEM AUTENTICAÇÃO - Implementar autenticação antes de produção!');
    }
  }
  
  // Headers de performance
  const response = NextResponse.next();
  
  // Adicionar headers de cache baseados na rota
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'no-store, max-age=0');
  } else if (request.nextUrl.pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (request.nextUrl.pathname.startsWith('/images/')) {
    response.headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=3600');
  } else {
    // Cache para páginas HTML
    response.headers.set('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=60');
  }
  
  // Adicionar timing header
  const duration = Date.now() - start;
  response.headers.set('X-Response-Time', `${duration}ms`);
  
  // Adicionar header de geolocalização se disponível (Next.js 16+ usa headers)
  const country = request.headers.get('x-vercel-ip-country') || 'Unknown';
  response.headers.set('X-Country', country);
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

