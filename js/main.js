// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Loading Animation
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    
    // Animate loading text
    tl.to("#loading-text", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
    })
    .to("#loading-bar", {
        opacity: 1,
        scaleX: 1,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.5")
    .to("#loading", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
            document.getElementById('loading').style.display = 'none';
            initMainAnimations();
        }
    }, "+=0.5");
});

function initMainAnimations() {
    // Hero Section Animation
    const heroTl = gsap.timeline();
    
    heroTl.to("#hero-title", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out"
    })
    .to("#hero-subtitle", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=0.6")
    .to("#hero-scroll", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.4");

    // Parallax Stars Animation
    gsap.to("#star1", {
        y: -100,
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
    });

    gsap.to("#star2", {
        y: -80,
        x: 50,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to("#star3", {
        y: -120,
        x: -30,
        duration: 25,
        repeat: -1,
        ease: "none"
    });

    // Scroll-triggered Animations
    
    // Early Life Section
    gsap.fromTo("#early-text", {
        opacity: 0,
        x: -100
    }, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#early-life",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.fromTo("#early-visual", {
        opacity: 0,
        x: 100
    }, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#early-life",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });

    // Arles Section
    gsap.fromTo("#arles-title", {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#arles",
            start: "top 70%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.fromTo("#arles-subtitle", {
        opacity: 0,
        y: 30
    }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#arles",
            start: "top 60%",
            toggleActions: "play none none reverse"
        }
    });

    // Artwork Items Staggered Animation
    gsap.fromTo(".artwork-item", {
        opacity: 0,
        y: 80,
        scale: 0.8
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".artwork-item",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Saint-Rémy Section
    gsap.fromTo("#saint-remy-visual", {
        opacity: 0,
        x: -100,
        rotation: -5
    }, {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#saint-remy",
            start: "top 70%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.fromTo("#saint-remy-text", {
        opacity: 0,
        x: 100
    }, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#saint-remy",
            start: "top 60%",
            toggleActions: "play none none reverse"
        }
    });

    // Legacy Section
    gsap.fromTo("#legacy-title", {
        opacity: 0,
        y: 50,
        scale: 0.9
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#legacy",
            start: "top 70%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.fromTo(".legacy-item", {
        opacity: 0,
        y: 100,
        rotation: 5
    }, {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".legacy-item",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.fromTo("#final-quote", {
        opacity: 0,
        y: 30
    }, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#final-quote",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Navbar Background on Scroll
    ScrollTrigger.create({
        trigger: "body",
        start: "100px top",
        end: "bottom bottom",
        onUpdate: (self) => {
            const navbar = document.getElementById('navbar');
            if (self.direction === 1 && self.progress > 0.1) {
                navbar.style.background = 'rgba(10, 15, 46, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else if (self.direction === -1 && self.progress < 0.1) {
                navbar.style.background = 'transparent';
                navbar.style.backdropFilter = 'none';
            }
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: "power2.inOut"
                });
            }
        });
    });

    // Parallax Background Effect for Sections
    gsap.utils.toArray("section").forEach((section, i) => {
        if (i % 2 === 0) {
            gsap.fromTo(section, {
                backgroundPosition: "50% 100px"
            }, {
                backgroundPosition: "50% -100px",
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }
    });

    // Mouse Movement Parallax for Hero Section
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        gsap.to("#star1", {
            x: (mouseX - 0.5) * 50,
            y: (mouseY - 0.5) * 30,
            duration: 2,
            ease: "power2.out"
        });
        
        gsap.to("#star2", {
            x: (mouseX - 0.5) * -30,
            y: (mouseY - 0.5) * 20,
            duration: 2.5,
            ease: "power2.out"
        });
        
        gsap.to("#star3", {
            x: (mouseX - 0.5) * 40,
            y: (mouseY - 0.5) * -25,
            duration: 3,
            ease: "power2.out"
        });
    });

    // Artwork Hover Effects Enhancement
    document.querySelectorAll('.artwork-hover').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                scale: 1.05,
                y: -10,
                rotationY: 5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                duration: 0.6,
                ease: "power2.out"
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                scale: 1,
                y: 0,
                rotationY: 0,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                duration: 0.6,
                ease: "power2.out"
            });
        });
    });

    // Text Reveal Animation for Long Texts
    gsap.utils.toArray("p").forEach(p => {
        gsap.fromTo(p, {
            opacity: 0.3
        }, {
            opacity: 1,
            duration: 1,
            ease: "none",
            scrollTrigger: {
                trigger: p,
                start: "top 90%",
                end: "bottom 60%",
                scrub: 1
            }
        });
    });
}

// Resize Handler
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// Performance Optimization: Pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        gsap.globalTimeline.pause();
    } else {
        gsap.globalTimeline.resume();
    }
});

console.log('🎨 Vincent van Gogh Website loaded successfully!'); 