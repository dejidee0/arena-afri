import type { Metadata, Viewport } from 'next'
import { Outfit, Space_Mono } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Arena Africa - Football Tournament Management Platform',
  description: 'Manage football tournaments, track statistics, and connect with teams and referees across Africa.',
  keywords: ['football', 'tournament', 'management', 'Africa', 'sports'],
  authors: [{ name: 'Arena Africa' }],
  openGraph: {
    title: 'Arena Africa - Football Tournament Management Platform',
    description: 'Manage football tournaments, track statistics, and connect with teams and referees across Africa.',
    type: 'website',
    url: 'https://arena-africa.com',
    siteName: 'Arena Africa',
  },
}

export const viewport: Viewport = {
  themeColor: '#FFD700',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          :root {
            --font-outfit: ${outfit.style.fontFamily};
            --font-space-mono: ${spaceMono.style.fontFamily};
          }
        `}</style>
      </head>
      <body className={`${outfit.variable} ${spaceMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
