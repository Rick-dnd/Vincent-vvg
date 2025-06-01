'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const scrollPromptRef = useRef<HTMLDivElement>(null)
  const starsRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      // Hero intro animation
      const tl = gsap.timeline({ delay: 2 }) // Wait for loading screen
      
      if (titleRef.current?.children[0]) {
        tl.from(titleRef.current.children[0], {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        })
      }
      
      if (titleRef.current?.children[1]) {
        tl.from(titleRef.current.children[1], {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        }, "-=0.8")
      }
      
      if (subtitleRef.current) {
        tl.from(subtitleRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        }, "-=0.5")
      }
      
      if (scrollPromptRef.current) {
        tl.from(scrollPromptRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.3")
      }

      // ECHTER PARALLAX EFFEKT - Hintergrund bewegt sich VIEL langsamer
      if (backgroundRef.current && heroRef.current) {
        gsap.to(backgroundRef.current, {
          y: () => window.innerHeight * 0.5, // Hintergrund bewegt sich nur 50% der Scroll-Distanz
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 2, // Langsamer scrub für smooth effect
            invalidateOnRefresh: true
          }
        })
      }

      // Content bewegt sich normal (mit dem Scroll)
      // Kein extra Transform für Content - lassen wir natürlich scrollen

      // Stars parallax - jeder Stern mit verschiedener Geschwindigkeit
      if (starsRef.current && heroRef.current) {
        const stars = Array.from(starsRef.current.children)
        stars.forEach((star, index) => {
          const speed = 0.2 + (index * 0.1) // Langsamere Geschwindigkeiten
          gsap.to(star, {
            y: () => window.innerHeight * speed,
            rotation: 45 * (index + 1),
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
              invalidateOnRefresh: true
            }
          })
        })
      }

      // Mouse parallax effect für Sterne
      const handleMouseMove = (e: MouseEvent) => {
        if (!starsRef.current) return
        
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window
        
        const moveX = (clientX / innerWidth - 0.5) * 20
        const moveY = (clientY / innerHeight - 0.5) * 15
        
        gsap.to(starsRef.current.children, {
          x: moveX,
          y: moveY,
          duration: 0.8,
          stagger: 0.05,
          ease: "power2.out"
        })
      }

      window.addEventListener('mousemove', handleMouseMove)
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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

      {/* Van Gogh Selbstporträt - Transparentes Hintergrundbild */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
        <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
          <Image
            src="/images/VanGogh_1887_Selbstbildnis_Hero.jpg"
            alt="Vincent van Gogh Selbstporträt 1887"
            fill
            className="object-cover rounded-full"
            style={{ 
              filter: 'blur(1px)',
              transform: 'scale(1.1)'
            }}
            priority={false}
          />
        </div>
      </div>

      {/* Stars Animation */}
      <div ref={starsRef} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content - bewegt sich normal mit dem Scroll */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div ref={titleRef}>
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold mb-8 leading-none">
            <span className="block text-white font-serif">Vincent</span>
            <span className="block text-vangogh-gold font-serif text-glow-strong">
              van Gogh
            </span>
          </h1>
        </div>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Eine Reise durch das Leben und die Kunst eines der größten Maler aller Zeiten
        </p>
        
        <div ref={scrollPromptRef}>
          <p className="text-sm md:text-base text-gray-400 mb-6">Scrollen Sie für mehr</p>
          <div className="w-px h-16 bg-gradient-to-b from-vangogh-gold to-transparent mx-auto animate-bounce" />
        </div>
      </div>

      {/* Floating Art Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-vangogh-gold/30 rounded-full animate-float" />
        <div className="absolute bottom-32 right-16 w-16 h-16 border-2 border-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-8 w-12 h-12 border-2 border-vangogh-gold/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </section>
  )
} 