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
            width={200}
            height={60}
            className="h-16 w-auto"
            priority
          />
        ) : (
          // Fallback: Logo em texto estilizado com identidade visual
          <div className="flex items-center gap-2.5">
            <div className="flex size-16 items-center justify-center rounded-lg bg-gradient-to-br from-[#2A3B95] via-[#5D2C9D] to-[#008C9E] shadow-lg">
              <span className="text-2xl font-bold text-white">E</span>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-[#2A3B95] via-[#5D2C9D] to-[#008C9E] bg-clip-text text-transparent">
              Estimulus
            </span>
          </div>
        )}
      </a>
    </div>
  )
}

