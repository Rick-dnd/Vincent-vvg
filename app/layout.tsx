import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Vincent van Gogh - Das Leben eines Genies',
  description: 'Eine moderne interaktive Website über das Leben und die Kunstwerke von Vincent van Gogh mit Parallax-Effekten',
  keywords: ['Vincent van Gogh', 'Kunst', 'Malerei', 'Parallax', 'Modern Design'],
  authors: [{ name: 'Vincent van Gogh Website' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#020617',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} bg-midnight-950 text-white overflow-x-hidden min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 