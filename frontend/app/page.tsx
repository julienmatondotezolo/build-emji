'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Shield, Rocket, Code, Paintbrush, Bot, Database, Cloud } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/navigation'
import { ProjectWizard } from '@/components/project-wizard'
import { HeroSection } from '@/components/sections/hero-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { PricingSection } from '@/components/sections/pricing-section'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  const [showWizard, setShowWizard] = useState(false)

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection onStartBuilding={() => setShowWizard(true)} />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '2-7', label: 'Days to Deploy', suffix: 'vs 3-6 months' },
              { value: '€10K', label: 'Average Cost', suffix: 'vs €100K consulting' },
              { value: '95%', label: 'Success Rate', suffix: 'Production deployments' },
              { value: '24/7', label: 'AI Monitoring', suffix: 'Continuous optimization' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.suffix}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glass rounded-3xl p-12 border">
              <div className="flex items-center justify-center mb-6">
                <Badge variant="secondary" className="px-4 py-1 text-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Ready to Build
                </Badge>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Your Ideas Into
                <span className="gradient-text block mt-2">
                  SaaS Reality
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the future of SaaS development. Let AI agents build your next big idea 
                while you focus on growing your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="button-shine gradient-primary text-white border-0 px-8 py-4 text-lg"
                  onClick={() => setShowWizard(true)}
                >
                  Start Building Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="glass border-glass-border px-8 py-4 text-lg"
                >
                  View Demo Projects
                  <Rocket className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-500" />
                  Enterprise Security
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                  Lightning Fast
                </div>
                <div className="flex items-center">
                  <Bot className="w-4 h-4 mr-2 text-blue-500" />
                  AI-Powered
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t bg-muted/20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl">SaaS Builder</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Built with ❤️ by Emji</span>
              <span>•</span>
              <span>Powered by AI</span>
              <span>•</span>
              <span>Enterprise Ready</span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Project Wizard Modal */}
      {showWizard && (
        <ProjectWizard onClose={() => setShowWizard(false)} />
      )}
    </div>
  )
}