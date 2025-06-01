'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#early-life', label: 'Frühe Jahre' },
    { href: '#arles', label: 'Arles' },
    { href: '#saint-remy', label: 'Saint-Rémy' },
    { href: '#legacy', label: 'Vermächtnis' },
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // GSAP scroll trigger for sections
    navItems.forEach((item) => {
      if (item.href !== '#hero') {
        const element = document.querySelector(item.href)
        if (element) {
          ScrollTrigger.create({
            trigger: item.href,
            start: "top 100px",
            end: "bottom 100px",
            onEnter: () => {
              // Add active state logic here if needed
            },
            onLeave: () => {
              // Remove active state logic here if needed
            }
          })
        }
      }
    })

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const smoothScrollTo = (targetId: string) => {
    console.log(`Scrolling to: ${targetId}`)
    
    // Remove the # from the targetId if it exists
    const cleanId = targetId.replace('#', '')
    const element = document.getElementById(cleanId)
    
    if (element) {
      console.log(`Element found: ${cleanId}`)
      // Use GSAP for smoother scrolling with offset for fixed header
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: element,
          offsetY: 80 // Account for fixed header
        },
        ease: "power2.inOut"
      })
    } else {
      console.log(`Element not found: ${cleanId}, scrolling to top`)
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: 0 },
        ease: "power2.inOut"
      })
    }
  }

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-midnight-950/95 backdrop-blur-md border-b border-navy-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => smoothScrollTo('#hero')}
            className="text-2xl font-bold text-vangogh-gold hover:text-vangogh-amber transition-colors duration-300 font-serif"
          >
            VvG
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => smoothScrollTo(item.href)}
                className="text-gray-300 hover:text-vangogh-gold transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-vangogh-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-vangogh-gold transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
} 