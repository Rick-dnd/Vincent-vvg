'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function EarlyLifeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const artworkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        })
      }

      // Content stagger animation
      if (contentRef.current) {
        const paragraphs = contentRef.current.querySelectorAll('p, .date-highlight')
        gsap.from(paragraphs, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        })
      }

      // Artwork card animation
      if (artworkRef.current) {
        gsap.from(artworkRef.current, {
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: artworkRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        })
      }

      // ECHTER PARALLAX EFFEKT - Hintergrund bewegt sich VIEL langsamer
      if (backgroundRef.current && sectionRef.current) {
        gsap.to(backgroundRef.current, {
          y: () => window.innerHeight * 0.3, // Hintergrund bewegt sich nur 30% der Scroll-Distanz
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2, // Langsamer scrub
            invalidateOnRefresh: true
          }
        })
      }

      // Content bewegt sich normal - KEIN extra Transform
      // Lassen wir den Content natürlich mit dem Scroll bewegen
    })

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="early-life" 
      ref={sectionRef}
      className="relative min-h-screen py-24 px-6 overflow-hidden"
    >
      {/* Parallax Background - bewegt sich langsamer */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(135deg, #1e293b 0%, #0f1729 50%, #334155 100%)',
          willChange: 'transform',
          // Hintergrund größer machen für Parallax
          height: '120vh',
          top: '-10vh'
        }}
      />

      {/* Content - bewegt sich normal */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-center mb-16 text-vangogh-gold font-serif text-glow"
        >
          Seine frühen Jahre
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef} className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Vincent Willem van Gogh wurde am <span className="text-vangogh-gold font-semibold">30. März 1853</span> in 
              Groot-Zundert, Niederlande, geboren. Er war der älteste Sohn des protestantischen 
              Pastors Theodorus van Gogh und Anna Carbentus.
            </p>
            
            <div className="date-highlight bg-navy-800/50 p-6 rounded-xl border border-navy-700">
              <h3 className="text-2xl font-bold text-vangogh-gold mb-4">Wichtige Daten</h3>
              <ul className="space-y-3 text-gray-300">
                <li><span className="text-vangogh-amber">1853:</span> Geburt in Groot-Zundert</li>
                <li><span className="text-vangogh-amber">1869:</span> Erste Arbeit bei Goupil & Cie</li>
                <li><span className="text-vangogh-amber">1879:</span> Beginn der Predigertätigkeit</li>
                <li><span className="text-vangogh-amber">1881:</span> Erste künstlerische Versuche</li>
              </ul>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Seine Kindheit war geprägt von emotionaler Instabilität und dem Druck, 
              dem Andenken seines verstorbenen Bruders gerecht zu werden, der ebenfalls 
              Vincent hieß und genau ein Jahr vor seiner Geburt starb.
            </p>
          </div>
          
          <div ref={artworkRef} className="artwork-card p-8">
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl p-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-vangogh-gold mb-4">Die Kartoffelesser</h3>
              <div className="relative rounded-lg overflow-hidden mb-4 shadow-lg">
                <Image
                  src="/images/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg"
                  alt="Die Kartoffelesser von Vincent van Gogh"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Ein Werk aus seinen frühen Jahren, das seine Verbindung zu den 
                einfachen Menschen und dem bäuerlichen Leben zeigt. Van Gogh malte bewusst 
                die harten Arbeitshände und müden Gesichter der Bauern.
              </p>
              <div className="mt-4 text-sm text-vangogh-amber">
                <span>1885 • Öl auf Leinwand • 82 × 114 cm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements für zusätzlichen Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 left-20 w-4 h-4 bg-vangogh-gold/20 rounded-full animate-float" />
        <div className="absolute bottom-40 right-32 w-3 h-3 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 left-16 w-2 h-2 bg-vangogh-amber/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </section>
  )
} 