import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const start = Date.now();
  
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

