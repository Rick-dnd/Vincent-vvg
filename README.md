# 🎨 Vincent van Gogh - Das Leben eines Genies

Eine moderne Next.js-Website über das Leben und die Kunstwerke von Vincent van Gogh mit intensiven Parallax-Effekten und dunkelblauen Design.

## ✨ Features

- **Intensives dunkelblaues Design** mit Sternenhimmel-Effekten
- **Next.js 14** mit TypeScript und App Router
- **Parallax-Effekte** mit GSAP ScrollTrigger
- **Glasmorphismus-Effekte** für moderne UI
- **Responsive Design** für alle Geräte
- **Performance-optimiert** mit React 18
- **Smooth Animations** beim Scrollen
- **Interactive Hover-Effekte** bei Kunstwerken

## 🚀 Technologie-Stack

- **Next.js 14** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling Framework
- **GSAP + ScrollTrigger** - Parallax & Animationen
- **Framer Motion** - React Animationen
- **Lucide React** - Icons

## 📁 Projektstruktur

```
/vincent-van-gogh-website
│
├── app/
│   ├── components/          # React Komponenten
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── EarlyLifeSection.tsx
│   │   ├── ArlesSection.tsx
│   │   ├── SaintRemySection.tsx
│   │   └── LegacySection.tsx
│   ├── globals.css          # Global Styles
│   ├── layout.tsx           # Root Layout
│   └── page.tsx            # Main Page
│
├── public/
│   └── images/             # Kunstwerke (optimierte Bilder)
│
├── data/
│   └── artworks.json      # Metadaten der Kunstwerke
│
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind Configuration
├── tsconfig.json         # TypeScript Configuration
└── next.config.js        # Next.js Configuration
```

## 🚀 Installation & Start

### Voraussetzungen
- Node.js 18+ installiert
- npm oder yarn package manager

### Setup
```bash
# Repository klonen
git clone [your-repo-url]
cd vincent-van-gogh-website

# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Öffnen Sie http://localhost:3000 im Browser
```

### Build für Production
```bash
# Produktions-Build erstellen
npm run build

# Produktions-Server starten
npm start
```

## 🎯 Inhalte

### Biografische Sektionen
1. **Hero Section** - Großer Titel "Vincent van Gogh" mit Parallax-Sternen
2. **Kindheit & Jugend** - Frühe Jahre (1853-1885)
3. **Arles-Periode** - Produktivste Zeit (1888-1889)
4. **Saint-Rémy** - Zeit im Asylum (1889-1890)
5. **Vermächtnis** - Letzte Jahre & Einfluss

### Die 10 wichtigsten Kunstwerke
- Sternennacht (1889)
- Sonnenblumen (1888)
- Das Schlafzimmer in Arles (1888)
- Sternennacht über der Rhône (1888)
- Weizenfeld mit Krähen (1890)
- Die Kartoffelesser (1885)
- Mandelblüte (1890)
- Selbstporträt (1889)
- Das gelbe Haus (1888)
- Porträt von Dr. Gachet (1890)

## 🎬 Animationen & Effekte

- **Loading Screen** mit Logo-Animation und Fortschrittsbalken
- **Glasmorphismus Navigation** mit Scroll-Effekten
- **Hero Parallax** mit beweglichen Sternen und Mouse-Tracking
- **Scroll-Triggered Animations** für alle Sektionen
- **Artwork Cards** mit Hover-Effekten und Glanz-Animationen
- **Floating Elements** für dynamische Atmosphäre
- **Text Glow Effects** für goldene Highlights

## 🎨 Design-Features

### Farbpalette
- **Midnight**: `#020617` - Tiefster Hintergrund
- **Navy**: `#0f172a` - Haupthintergrund
- **Deep**: `#1e293b` - Sektions-Hintergrund
- **Steel**: `#334155` - Akzent-Hintergrund
- **Gold**: `#fbbf24` - Van Gogh Gold
- **Amber**: `#f59e0b` - Warme Akzente

### Custom CSS Classes
- `.starry-background` - Sternenhimmel-Effekt
- `.glass-morphism` - Glasmorphismus-Effekt
- `.text-glow` - Goldener Text-Glow
- `.artwork-card` - Kunstwerk-Karten-Stil

## 📱 Browser-Support

- Chrome (empfohlen)
- Firefox
- Safari
- Edge

## 🎨 Design-Inspiration

Das Design wurde inspiriert von modernen Portfolio-Websites:
- [dotdna.io](https://dotdna.io/) - Dunkles Theme & Parallax
- Intensiver dunkelblauer Vibe
- Sterne & Weltraum-Atmosphäre

## 📝 Development Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

## 📄 License

Dieses Projekt ist für Bildungszwecke erstellt. Die Kunstwerke von Vincent van Gogh sind gemeinfrei.

---

**🎨 "Ich träume von einem Bild, und dann male ich meinen Traum." - Vincent van Gogh** 