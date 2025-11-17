'use client'

import Image from 'next/image'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <a href="/" className="flex items-center">
        <Image
          src="/logo-oficial-estimulus.png"
          alt="Estimulus - Marketing de Fidelização Inteligente"
          width={200}
          height={60}
          className="h-12 md:h-16 w-auto object-contain"
          priority
          unoptimized
        />
      </a>
    </div>
  )
}

