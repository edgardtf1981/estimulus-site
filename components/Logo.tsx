'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // Verifica se a imagem existe
    const img = new window.Image()
    img.onload = () => setImageLoaded(true)
    img.onerror = () => setImageError(true)
    img.src = '/logo.png'
  }, [])

  // Tenta carregar a logo, se não encontrar, usa texto estilizado
  return (
    <div className={`flex items-center ${className}`}>
      <a href="/" className="flex items-center">
        {/* Tenta carregar logo da pasta public */}
        {imageLoaded && !imageError ? (
          <Image
            src="/logo.png"
            alt="Estimulus"
            width={150}
            height={40}
            className="h-10 w-auto"
            priority
          />
        ) : (
          // Fallback: Logo em texto estilizado com identidade visual
          <div className="flex items-center gap-2.5">
            <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
              <span className="text-xl font-bold text-white">E</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Estimulus
            </span>
          </div>
        )}
      </a>
    </div>
  )
}

