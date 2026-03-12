'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Code, Zap, Bot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

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

interface HeroSectionProps {
  onStartBuilding: () => void
}

export function HeroSection({ onStartBuilding }: HeroSectionProps) {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <Badge 
              variant="glass" 
              size="lg" 
              className="px-4 py-2 text-sm border-brand-500/20"
              icon={<Sparkles className="w-4 h-4" />}
            >
              AI-Powered SaaS Development Platform
            </Badge>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          >
            Build Enterprise SaaS
            <br />
            <span className="gradient-text">
              In Days, Not Months
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Let AI agents handle the complexity. Transform your ideas into 
            production-ready SaaS applications with enterprise-grade security 
            and modern architecture.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="xl"
              className="button-shine gradient-primary text-white border-0 px-8 py-4 text-lg font-semibold"
              onClick={onStartBuilding}
            >
              <Code className="mr-2 h-5 w-5" />
              Start Building Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="xl"
              variant="glass"
              className="border-brand-500/20 px-8 py-4 text-lg font-semibold"
            >
              <Bot className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>
          
          {/* Social Proof */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 border-2 border-background flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span>Trusted by 200+ developers</span>
            </div>
            
            <div className="hidden md:block w-px h-4 bg-border" />
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>2-7 days to deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>95% success rate</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating code snippets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-8 lg:left-16 glass rounded-lg p-3 text-xs font-mono opacity-60"
        >
          <div className="text-green-400">✓ Frontend generated</div>
          <div className="text-blue-400">→ Next.js + React 19</div>
        </motion.div>
        
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 right-8 lg:right-16 glass rounded-lg p-3 text-xs font-mono opacity-60"
        >
          <div className="text-purple-400">⚡ API deployed</div>
          <div className="text-orange-400">→ NestJS + PostgreSQL</div>
        </motion.div>
        
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 glass rounded-lg p-3 text-xs font-mono opacity-60"
        >
          <div className="text-cyan-400">🔒 Security enabled</div>
          <div className="text-green-400">→ SOC2 + GDPR ready</div>
        </motion.div>
      </div>
    </section>
  )
}