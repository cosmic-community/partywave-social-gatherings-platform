import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PartyWave - Social Gatherings Platform',
  description: 'Discover and create amazing social experiences. Join verified events, meet new people, and build meaningful connections.',
  keywords: ['social events', 'parties', 'networking', 'workshops', 'experiences'],
  authors: [{ name: 'PartyWave' }],
  creator: 'PartyWave',
  publisher: 'PartyWave',
  openGraph: {
    title: 'PartyWave - Social Gatherings Platform',
    description: 'Discover and create amazing social experiences',
    url: 'https://partywave.app',
    siteName: 'PartyWave',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=600&fit=crop&auto=format',
        width: 1200,
        height: 600,
        alt: 'PartyWave - Social Gatherings Platform',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PartyWave - Social Gatherings Platform',
    description: 'Discover and create amazing social experiences',
    images: ['https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=600&fit=crop&auto=format'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Access environment variable on server side
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#fff',
                color: '#1a1a1a',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              },
            }}
          />
          {/* Pass bucket slug as prop to client component */}
          <CosmicBadge bucketSlug={bucketSlug} />
        </div>
      </body>
    </html>
  )
}