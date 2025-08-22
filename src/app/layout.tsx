import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Game Developer Portfolio - Francois',
  description: 'Video Game Programming Portfolio showcasing innovative game development projects, technical expertise, and creative solutions.',
  keywords: ['game development', 'programming', 'video games', 'portfolio', 'game developer'],
  authors: [{ name: 'Francois' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
