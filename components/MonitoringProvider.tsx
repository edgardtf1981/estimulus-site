'use client'

import { useEffect } from 'react'
import { monitoring } from '@/lib/monitoring'

export function MonitoringProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inicializar monitoramento apenas no cliente
    try {
      monitoring.trackWebVitals()
      
      // Monitorar erros globais
      const handleError = (event: ErrorEvent) => {
        monitoring.trackError(event.error || new Error(event.message), {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        })
      }
      
      // Monitorar promises rejeitadas
      const handleRejection = (event: PromiseRejectionEvent) => {
        monitoring.trackError(
          event.reason instanceof Error ? event.reason : new Error(String(event.reason)),
          { type: 'unhandledrejection' }
        )
      }
      
      window.addEventListener('error', handleError)
      window.addEventListener('unhandledrejection', handleRejection)
      
      return () => {
        window.removeEventListener('error', handleError)
        window.removeEventListener('unhandledrejection', handleRejection)
      }
    } catch (error) {
      // Ignorar erros de inicialização
      if (process.env.NODE_ENV === 'development') {
        console.warn('Erro ao inicializar monitoramento:', error)
      }
    }
  }, [])
  
  return <>{children}</>
}

