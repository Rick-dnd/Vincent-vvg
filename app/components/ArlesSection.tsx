'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ArlesSection() {
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
          x: -100,
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
      id="arles" 
      ref={sectionRef}
      className="relative min-h-screen py-24 px-6 overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(135deg, #2d1b69 0%, #1e293b 50%, #0f1729 100%)',
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
          Die Arles-Zeit
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={artworkRef} className="artwork-card p-8">
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl p-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-vangogh-gold mb-4">Das gelbe Haus</h3>
              <div className="relative rounded-lg overflow-hidden mb-4 shadow-lg">
                <Image
                  src="/images/Vincent_van_Gogh_-_The_yellow_house_('The_street').jpg"
                  alt="Das gelbe Haus von Vincent van Gogh"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Van Goghs berühmtes gelbes Haus in Arles, wo er von 1888 bis 1889 lebte 
                und einige seiner bekanntesten Werke schuf.
              </p>
              <div className="mt-4 text-sm text-vangogh-amber">
                <span>1888 • Öl auf Leinwand</span>
              </div>
            </div>
          </div>

          <div ref={contentRef} className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Im Februar <span className="text-vangogh-gold font-semibold">1888</span> zog Van Gogh nach 
              Arles in Südfrankreich, auf der Suche nach dem intensiven Licht des Südens. 
              Diese Zeit wurde zu einer seiner produktivsten Perioden.
            </p>
            
            <div className="date-highlight bg-navy-800/50 p-6 rounded-xl border border-navy-700">
              <h3 className="text-2xl font-bold text-vangogh-gold mb-4">Arles Highlights</h3>
              <ul className="space-y-3 text-gray-300">
                <li><span className="text-vangogh-amber">1888:</span> Ankunft in Arles</li>
                <li><span className="text-vangogh-amber">1888:</span> Das gelbe Haus</li>
                <li><span className="text-vangogh-amber">1888:</span> Sonnenblumen-Serie</li>
                <li><span className="text-vangogh-amber">1888:</span> Besuch von Paul Gauguin</li>
              </ul>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              In Arles schuf Van Gogh über 300 Gemälde und Zeichnungen, darunter 
              seine berühmten Sonnenblumen und das Schlafzimmer. Das südliche Licht 
              inspirierte ihn zu leuchtenden Farben und expressiven Pinselstrichen.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 right-20 w-6 h-6 bg-yellow-400/30 rounded-full animate-float" />
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-vangogh-gold/20 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-16 w-3 h-3 bg-orange-400/40 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
    </section>
  )
} 