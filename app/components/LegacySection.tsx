'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function LegacySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      // Title animation only
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

      // ECHTER PARALLAX EFFEKT - Hintergrund bewegt sich VIEL langsamer
      if (backgroundRef.current && sectionRef.current) {
        gsap.to(backgroundRef.current, {
          y: () => window.innerHeight * 0.2,
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
      id="legacy" 
      ref={sectionRef}
      className="relative min-h-screen py-24 px-6 overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          willChange: 'transform',
          height: '120vh',
          top: '-10vh'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold text-vangogh-gold mb-8 font-serif text-glow"
          >
            Sein Vermächtnis
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Vincent van Gogh starb arm und unerkannt, hinterließ aber ein unschätzbares künstlerisches Erbe
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="artwork-card p-8">
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl p-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-vangogh-gold mb-4">Selbstporträt</h3>
              <div className="relative rounded-lg overflow-hidden mb-4 shadow-lg bg-gray-800">
                <Image
                  src="/images/1024px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg"
                  alt="Selbstporträt von Vincent van Gogh"
                  width={400}
                  height={320}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  priority={false}
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Van Gogh malte über 30 Selbstporträts, die seine psychische Verfassung und 
                künstlerische Entwicklung dokumentieren.
              </p>
              <div className="mt-4 text-sm text-vangogh-amber">
                <span>1889 • Öl auf Leinwand</span>
              </div>
            </div>
          </div>
          
          <div className="artwork-card p-8">
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl p-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-vangogh-gold mb-4">Stillleben mit Tontopf und Kartoffeln</h3>
              <div className="relative rounded-lg overflow-hidden mb-4 shadow-lg bg-gray-800">
                <Image
                  src="/images/Still_Life_with_an_Earthen_Bowl_and_Potatoes_by_Vincent_van_Gogh.jpg"
                  alt="Stillleben mit Tontopf und Kartoffeln von Vincent van Gogh"
                  width={400}
                  height={320}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  priority={false}
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Ein einfaches aber kraftvolles Stillleben, das Van Goghs Fähigkeit zeigt, 
                alltägliche Gegenstände mit Würde und Schönheit darzustellen.
              </p>
              <div className="mt-4 text-sm text-vangogh-amber">
                <span>1884 • Öl auf Leinwand</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-navy-800/50 rounded-3xl p-8 border border-navy-700">
            <h3 className="text-3xl font-bold text-vangogh-gold mb-6 font-serif">Der Künstler</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Vincent van Gogh schuf über 2000 Kunstwerke in nur 10 Jahren.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Seine einzigartige Maltechnik und emotionale Intensität beeinflussten 
              ganze Generationen von Künstlern.
            </p>
          </div>
          
          <div className="bg-navy-800/50 rounded-3xl p-8 border border-navy-700">
            <h3 className="text-3xl font-bold text-vangogh-gold mb-6 font-serif">Das Ende</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Am 29. Juli 1890 starb Vincent van Gogh im Alter von nur 37 Jahren in Auvers-sur-Oise.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Zu Lebzeiten verkaufte er nur ein einziges Gemälde.
            </p>
          </div>
        </div>
        
        <div className="text-center bg-gradient-to-r from-vangogh-gold/10 to-vangogh-amber/10 rounded-3xl p-12 border border-vangogh-gold/30">
          <blockquote className="text-3xl md:text-4xl font-serif italic text-vangogh-gold mb-6 text-glow">
            "Ich träume von einem Bild, und dann male ich meinen Traum."
          </blockquote>
          <p className="text-gray-300 text-lg">- Vincent van Gogh</p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 left-24 w-5 h-5 bg-vangogh-gold/20 rounded-full animate-float" />
        <div className="absolute bottom-32 right-20 w-4 h-4 bg-white/10 rounded-full animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-2/3 right-32 w-3 h-3 bg-vangogh-amber/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
    </section>
  )
} 