'use client'

import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 5
      })
    }, 30)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className={`fixed inset-0 z-[9999] bg-gradient-to-br from-midnight-950 via-navy-900 to-navy-800 flex items-center justify-center transition-opacity duration-500 ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-vangogh-gold mb-8 animate-pulse font-serif">
          Vincent van Gogh
        </h1>
        
        <div className="w-80 h-1 bg-navy-800 rounded-full mx-auto mb-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-vangogh-gold to-vangogh-amber rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-gray-300 text-lg">
          {progress}% geladen
        </p>
        
        {/* Floating Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-vangogh-gold rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-vangogh-gold rounded-full animate-pulse delay-700" />
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-1000" />
        </div>
      </div>
    </div>
  )
} 