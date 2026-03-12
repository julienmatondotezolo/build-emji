import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { QueryProvider } from '@/components/providers/query-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Forge | AI-Powered SaaS Development Platform',
    template: '%s | Forge'
  },
  description: 'Build enterprise-grade SaaS applications using AI agents in days, not months. Professional development platform trusted by founders and enterprises.',
  keywords: ['SaaS development', 'AI agents', 'enterprise software', 'rapid prototyping', 'automated development'],
  authors: [{ name: 'Emji Devimanus', url: 'https://emji.be' }],
  creator: 'Emji Devimanus',
  metadataBase: new URL('https://build.emji.be'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://build.emji.be',
    title: 'Forge | AI-Powered SaaS Development Platform',
    description: 'Build enterprise-grade SaaS applications using AI agents in days, not months.',
    siteName: 'Forge',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forge - AI-Powered SaaS Development Platform',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forge | AI-Powered SaaS Development Platform', 
    description: 'Build enterprise-grade SaaS applications using AI agents in days, not months.',
    images: ['/og-image.jpg'],
    creator: '@emji_dev',
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={inter.variable}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <QueryProvider>
            {children}
            <Toaster 
              position="bottom-right"
              closeButton
              richColors
            />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}