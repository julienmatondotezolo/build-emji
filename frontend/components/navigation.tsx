'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code, 
  Menu, 
  X, 
  ArrowRight, 
  Moon, 
  Sun, 
  Monitor,
  Github,
  Sparkles
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const navigationItems = [
  { name: 'Features', href: '#features', description: 'AI-powered development workflow' },
  { name: 'How it Works', href: '#how-it-works', description: 'From idea to deployment' },
  { name: 'Pricing', href: '#pricing', description: 'Transparent pricing plans' },
  { name: 'Docs', href: '/docs', description: 'Technical documentation' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('system')
    } else {
      setTheme('dark')
    }
  }

  const getThemeIcon = () => {
    if (!mounted) return <Monitor className="h-4 w-4" />
    
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />
      case 'dark':
        return <Moon className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass border-b border-glass-border backdrop-blur-xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none">SaaS Builder</span>
              <span className="text-xs text-muted-foreground">AI-Powered</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute inset-0 bg-accent/50 rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl"
            >
              {getThemeIcon()}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* GitHub */}
            <Button
              variant="ghost"
              size="icon"
              className="w-9 h-9 rounded-xl"
              asChild
            >
              <a href="https://github.com/julienmatondotezolo/build-emji" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>

            {/* Beta Badge */}
            <Badge variant="glass" className="px-3 py-1">
              <Sparkles className="w-3 h-3 mr-1" />
              Beta
            </Badge>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="gradient-primary text-white border-0 px-6 button-shine"
            >
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl"
            >
              {getThemeIcon()}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 rounded-xl"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-glass-border glass"
          >
            <div className="container-custom py-6">
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="block group"
                  >
                    <div className="glass rounded-xl p-4 hover:bg-white/10 transition-colors">
                      <div className="text-base font-medium text-foreground mb-1">
                        {item.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.description}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </nav>
              
              <div className="mt-6 space-y-4">
                <Button 
                  size="lg" 
                  className="w-full gradient-primary text-white border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <div className="flex items-center justify-center space-x-4">
                  <Badge variant="glass" className="px-3 py-1">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Beta
                  </Badge>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-xl"
                    asChild
                  >
                    <a href="https://github.com/julienmatondotezolo/build-emji" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}