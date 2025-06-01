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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

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
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
    
    // Simple, reliable scrolling function
    const performScroll = () => {
      const cleanId = targetId.replace('#', '')
      const element = document.getElementById(cleanId)
      
      if (element) {
        console.log(`Element found: ${cleanId}`)
        const yOffset = -80 // Account for fixed header
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        
        window.scrollTo({
          top: yPosition,
          behavior: 'smooth'
        })
        console.log(`Scrolled to ${cleanId}`)
      } else {
        console.log(`Element not found: ${cleanId}, scrolling to top`)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    
    // Add small delay if mobile menu was open
    if (isMobileMenuOpen) {
      setTimeout(performScroll, 100)
    } else {
      performScroll()
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
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

          {/* Desktop Navigation Links */}
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
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-300 hover:text-vangogh-gold transition-colors duration-300 relative z-60"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-current transition-all duration-300 my-1 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className={`md:hidden absolute top-full left-0 right-0 bg-midnight-950 border-b border-vangogh-gold/30 shadow-2xl transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => smoothScrollTo('home')}
              onTouchEnd={(e) => {
                e.preventDefault()
                smoothScrollTo('home')
              }}
              className="text-left text-lg font-medium text-white hover:text-vangogh-gold transition-all duration-300 py-4 px-6 rounded-xl hover:bg-navy-800/30 relative group border border-transparent hover:border-vangogh-gold/20"
            >
              <span className="relative z-10 block">Home</span>
              <span className="absolute bottom-2 left-6 w-0 h-0.5 bg-vangogh-gold transition-all duration-300 group-hover:w-12" />
            </button>
            <button
              onClick={() => smoothScrollTo('early-life')}
              onTouchEnd={(e) => {
                e.preventDefault()
                smoothScrollTo('early-life')
              }}
              className="text-left text-lg font-medium text-white hover:text-vangogh-gold transition-all duration-300 py-4 px-6 rounded-xl hover:bg-navy-800/30 relative group border border-transparent hover:border-vangogh-gold/20"
            >
              <span className="relative z-10 block">Frühe Jahre</span>
              <span className="absolute bottom-2 left-6 w-0 h-0.5 bg-vangogh-gold transition-all duration-300 group-hover:w-12" />
            </button>
            <button
              onClick={() => smoothScrollTo('arles')}
              onTouchEnd={(e) => {
                e.preventDefault()
                smoothScrollTo('arles')
              }}
              className="text-left text-lg font-medium text-white hover:text-vangogh-gold transition-all duration-300 py-4 px-6 rounded-xl hover:bg-navy-800/30 relative group border border-transparent hover:border-vangogh-gold/20"
            >
              <span className="relative z-10 block">Arles</span>
              <span className="absolute bottom-2 left-6 w-0 h-0.5 bg-vangogh-gold transition-all duration-300 group-hover:w-12" />
            </button>
            <button
              onClick={() => smoothScrollTo('saint-remy')}
              onTouchEnd={(e) => {
                e.preventDefault()
                smoothScrollTo('saint-remy')
              }}
              className="text-left text-lg font-medium text-white hover:text-vangogh-gold transition-all duration-300 py-4 px-6 rounded-xl hover:bg-navy-800/30 relative group border border-transparent hover:border-vangogh-gold/20"
            >
              <span className="relative z-10 block">Saint-Rémy</span>
              <span className="absolute bottom-2 left-6 w-0 h-0.5 bg-vangogh-gold transition-all duration-300 group-hover:w-12" />
            </button>
            <button
              onClick={() => smoothScrollTo('legacy')}
              onTouchEnd={(e) => {
                e.preventDefault()
                smoothScrollTo('legacy')
              }}
              className="text-left text-lg font-medium text-white hover:text-vangogh-gold transition-all duration-300 py-4 px-6 rounded-xl hover:bg-navy-800/30 relative group border border-transparent hover:border-vangogh-gold/20"
            >
              <span className="relative z-10 block">Vermächtnis</span>
              <span className="absolute bottom-2 left-6 w-0 h-0.5 bg-vangogh-gold transition-all duration-300 group-hover:w-12" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleMobileMenu}
        />
      )}
    </nav>
  )
} 