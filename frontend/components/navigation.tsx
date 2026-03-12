'use client'

import { useState, useEffect } from 'react'
import { Code2, Menu, X, Moon, Sun, Github, ArrowRight } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const navigationItems = [
  { name: 'Features', href: '#features' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Docs', href: '/docs' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg text-gray-900">Forge</span>
            <Badge className="hidden sm:inline-flex text-xs bg-blue-50 text-blue-700 border-blue-200">
              Beta
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* GitHub */}
            <Button
              variant="ghost"
              size="sm"
              className="w-9 h-9 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              asChild
            >
              <a 
                href="https://github.com/julienmatondotezolo/build-emji" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View on GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>

            {/* CTA Button */}
            <Button 
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4"
            >
              Start Building
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-4">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
              
              <div className="px-4 pt-4 border-t border-gray-200">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <div className="flex items-center justify-center mt-4 space-x-4">
                  <Badge className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                    Beta
                  </Badge>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    asChild
                  >
                    <a 
                      href="https://github.com/julienmatondotezolo/build-emji" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}