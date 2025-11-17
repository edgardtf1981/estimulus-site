interface PerformanceMetrics {
  FCP?: number;
  LCP?: number;
  FID?: number;
  CLS?: number;
  TTFB?: number;
}

class VercelMonitoring {
  private metrics: PerformanceMetrics[] = [];

  // Enviar métricas customizadas
  trackCustomMetric(name: string, value: number, unit: string = 'ms') {
    if (typeof window !== 'undefined') {
      // Usar Web Vitals API
      const metric = {
        name,
        value,
        unit,
        timestamp: Date.now(),
      };
      
      // Log para desenvolvimento
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${name}: ${value}${unit}`);
      }
      
      // Enviar para Vercel Analytics (se disponível)
      this.sendToVercelAnalytics(metric);
    }
  }

  // Monitorar Core Web Vitals
  trackWebVitals() {
    if (typeof window !== 'undefined') {
      // Web Vitals é opcional - apenas logar que está disponível
      // Para habilitar, instale: npm install web-vitals
      // E descomente o código abaixo
      
      // try {
      //   const webVitals = await import('web-vitals');
      //   const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals;
      //   if (getCLS) getCLS(this.onPerfEntry);
      //   if (getFID) getFID(this.onPerfEntry);
      //   if (getFCP) getFCP(this.onPerfEntry);
      //   if (getLCP) getLCP(this.onPerfEntry);
      //   if (getTTFB) getTTFB(this.onPerfEntry);
      // } catch (error) {
      //   // Web Vitals não disponível
      // }
      
      // Por enquanto, apenas logar métricas básicas
      if (process.env.NODE_ENV === 'development') {
        console.info('Web Vitals tracking disponível (instale web-vitals para métricas completas)');
      }
    }
  }

  private onPerfEntry = (metric: any) => {
    console.log(`[Web Vital] ${metric.name}: ${metric.value}${metric.unit}`);
    
    // Enviar para Vercel Analytics
    this.sendToVercelAnalytics(metric);
  };

  private sendToVercelAnalytics(metric: any) {
    if (typeof window !== 'undefined') {
      // Usar Vercel Analytics se disponível
      if ((window as any).va) {
        (window as any).va.track('performance', metric);
      }
    }
  }

  // Monitorar erros
  trackError(error: Error, context?: Record<string, any>) {
    console.error('Application error:', error);
    
    const errorData = {
      message: error.message,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString(),
    };
    
    // Enviar para Vercel Analytics
    if (typeof window !== 'undefined' && (window as any).va) {
      (window as any).va.track('error', errorData);
    }
  }

  // Monitorar APIs
  trackAPICall(endpoint: string, method: string, duration: number, status: number) {
    const metric = {
      endpoint,
      method,
      duration,
      status,
      timestamp: Date.now(),
    };
    
    // Log para desenvolvimento
    if (process.env.NODE_ENV === 'development') {
      console.log(`[API] ${method} ${endpoint} - ${duration}ms (${status})`);
    }
    
    // Enviar para analytics
    if (typeof window !== 'undefined' && (window as any).va) {
      (window as any).va.track('api_call', metric);
    }
  }
}

export const monitoring = new VercelMonitoring();

