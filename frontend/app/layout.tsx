import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { QueryProvider } from '@/components/providers/query-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'SaaS Builder | AI-Powered Development Platform',
    template: '%s | SaaS Builder'
  },
  description: 'Build enterprise-grade SaaS applications using AI agents in minutes, not months. Transform your ideas into production-ready applications.',
  keywords: ['SaaS', 'AI', 'Development', 'Platform', 'Enterprise', 'Automation'],
  authors: [{ name: 'Emji Devimanus' }],
  creator: 'Emji Devimanus',
  metadataBase: new URL('https://build.emji.be'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://build.emji.be',
    title: 'SaaS Builder | AI-Powered Development Platform',
    description: 'Build enterprise-grade SaaS applications using AI agents in minutes, not months.',
    siteName: 'SaaS Builder',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SaaS Builder Platform',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Builder | AI-Powered Development Platform',
    description: 'Build enterprise-grade SaaS applications using AI agents in minutes, not months.',
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
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#3b82f6' },
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
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <QueryProvider>
            <div className="relative flex min-h-screen flex-col bg-background">
              {/* Background effects */}
              <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/5 via-transparent to-brand-400/5" />
                <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-background/50 to-background" />
              </div>
              
              {/* Main content */}
              <main className="flex-1">
                {children}
              </main>
              
              {/* Toast notifications */}
              <Toaster 
                position="bottom-right"
                closeButton
                richColors
                expand
                visibleToasts={3}
              />
            </div>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}