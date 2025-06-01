'use client'

import React from 'react'
import HeroSection from './components/HeroSection'
import EarlyLifeSection from './components/EarlyLifeSection'
import ArlesSection from './components/ArlesSection'
import SaintRemySection from './components/SaintRemySection'
import LegacySection from './components/LegacySection'
import Navigation from './components/Navigation'
import LoadingScreen from './components/LoadingScreen'

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight-950">
      <LoadingScreen />
      <Navigation />
      
      <div className="relative">
        <HeroSection />
        <EarlyLifeSection />
        <ArlesSection />
        <SaintRemySection />
        <LegacySection />
      </div>
      
      {/* Footer */}
      <footer className="py-12 bg-black/50 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Vincent van Gogh - Eine digitale Hommage
          </p>
          <p className="text-sm text-gray-500 mt-2">
            "Ich träume von einem Bild, und dann male ich meinen Traum." - Vincent van Gogh
          </p>
        </div>
      </footer>
    </main>
  )
} 