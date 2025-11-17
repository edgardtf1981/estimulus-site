export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Obter informações geográficas (Next.js 16+ usa headers)
    const geo = {
      country: request.headers.get('x-vercel-ip-country') || 'unknown',
      city: request.headers.get('x-vercel-ip-city') || 'unknown',
      region: request.headers.get('x-vercel-ip-country-region') || 'unknown',
    };
    
    // Headers de cache otimizados
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
      'CDN-Cache-Control': 'public, s-maxage=300',
      'Vercel-CDN-Cache-Control': 'public, s-maxage=300',
    });

    // Personalização baseada na localização
    const response = {
      country: geo.country,
      city: geo.city,
      region: geo.region,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response, { headers });
  } catch (error) {
    console.error('Edge function error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

