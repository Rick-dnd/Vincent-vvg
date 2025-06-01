'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function SaintRemySection() {
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
          y: () => window.innerHeight * 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
            invalidateOnRefresh: true
          }
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="saint-remy" 
      ref={sectionRef}
      className="relative min-h-screen py-24 px-6 overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e293b 50%, #0f172a 100%)',
          willChange: 'transform',
          height: '120vh',
          top: '-10vh'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-center mb-16 text-vangogh-gold font-serif text-glow"
        >
          Saint-Rémy
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef} className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Nach seinem mentalen Zusammenbruch in Arles begab sich Van Gogh <span className="text-vangogh-gold font-semibold">1889</span>{' '}
              freiwillig in die Anstalt Saint-Paul-de-Mausole in Saint-Rémy-de-Provence.
            </p>
            
            <div className="date-highlight bg-navy-800/50 p-6 rounded-xl border border-navy-700">
              <h3 className="text-2xl font-bold text-vangogh-gold mb-4">Meisterwerke in Saint-Rémy</h3>
              <ul className="space-y-3 text-gray-300">
                <li><span className="text-vangogh-amber">1889:</span> Die Sternennacht</li>
                <li><span className="text-vangogh-amber">1889:</span> Kornfeld mit Zypressen</li>
                <li><span className="text-vangogh-amber">1889:</span> Olivenbäume</li>
                <li><span className="text-vangogh-amber">1890:</span> Mandelblüte</li>
              </ul>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Trotz seiner psychischen Probleme entstanden hier einige seiner berühmtesten Werke. 
              Die geschlossene Umgebung gab ihm Struktur, während die Natur der Provence 
              weiterhin seine Kreativität beflügelte.
            </p>
          </div>

          <div ref={artworkRef} className="artwork-card p-8">
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl p-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-vangogh-gold mb-4">Sternennacht über der Rhône</h3>
              <div className="relative rounded-lg overflow-hidden mb-4 shadow-lg">
                <Image
                  src="/images/960px-Starry_Night_Over_the_Rhone.jpg"
                  alt="Sternennacht über der Rhône von Vincent van Gogh"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Ein nächtliches Gemälde von Arles, das Van Goghs Faszination für den Nachthimmel 
                und die Reflexion der Sterne im Wasser zeigt.
              </p>
              <div className="mt-4 text-sm text-vangogh-amber">
                <span>1888 • Öl auf Leinwand • Musée d'Orsay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Zusätzliche Kunstwerke Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div className="artwork-card p-6">
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-vangogh-gold mb-4">Mandelblüte</h3>
              <div className="relative rounded-lg overflow-hidden mb-4 shadow-lg">
                <Image
                  src="/images/Amandelbloesem_-_s0176V1962_-_Van_Gogh_Museum.jpg"
                  alt="Mandelblüte von Vincent van Gogh"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Ein Symbol der Hoffnung und Erneuerung, gemalt als Geschenk für seinen Neffen.
              </p>
            </div>
          </div>

          <div className="artwork-card p-6">
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-vangogh-gold mb-4">Kornfeld mit Krähen</h3>
              <div className="relative rounded-lg overflow-hidden mb-4 shadow-lg">
                <Image
                  src="/images/Korenveld_met_kraaien_-_s0149V1962_-_Van_Gogh_Museum.jpg"
                  alt="Kornfeld mit Krähen von Vincent van Gogh"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Eines seiner letzten Gemälde, oft als düster interpretiert, aber voller Bewegung und Leben.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 left-20 w-5 h-5 bg-blue-400/30 rounded-full animate-float" />
        <div className="absolute bottom-40 right-24 w-4 h-4 bg-vangogh-gold/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-16 w-3 h-3 bg-purple-400/40 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </section>
  )
} 