'use client'

import { motion } from 'framer-motion'
import { 
  Bot, 
  Code, 
  Paintbrush, 
  Shield, 
  Zap, 
  Database,
  Cloud,
  Monitor,
  Lock,
  Rocket,
  Brain,
  Layers
} from 'lucide-react'
import { Card } from '@/components/ui/card'
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

const features = [
  {
    icon: Brain,
    title: 'AI Business Analyst',
    description: 'Intelligent requirements gathering and project scoping through conversational AI.',
    gradient: 'from-purple-500 to-pink-500',
    delay: 0.1
  },
  {
    icon: Paintbrush,
    title: 'Smart UI/UX Design',
    description: 'Generate modern, accessible interfaces following latest design trends and best practices.',
    gradient: 'from-pink-500 to-orange-500',
    delay: 0.2
  },
  {
    icon: Code,
    title: 'Enterprise Code Generation',
    description: 'Production-ready React, TypeScript, and Node.js code with proper architecture patterns.',
    gradient: 'from-orange-500 to-yellow-500',
    delay: 0.3
  },
  {
    icon: Database,
    title: 'Database Architecture',
    description: 'Optimal database schemas, migrations, and relationships designed for scale.',
    gradient: 'from-yellow-500 to-green-500',
    delay: 0.4
  },
  {
    icon: Shield,
    title: 'Security by Default',
    description: 'Built-in SOC2 compliance, GDPR readiness, and enterprise-grade security measures.',
    gradient: 'from-green-500 to-cyan-500',
    delay: 0.5
  },
  {
    icon: Rocket,
    title: 'One-Click Deployment',
    description: 'Automated deployment to your VPS, cloud provider, or on-premise infrastructure.',
    gradient: 'from-cyan-500 to-blue-500',
    delay: 0.6
  },
]

const stats = [
  { value: '10+', label: 'AI Specialists', description: 'Each focused on specific development tasks' },
  { value: '50+', label: 'SaaS Templates', description: 'Pre-built architectures for common use cases' },
  { value: '24/7', label: 'Monitoring', description: 'Continuous health checks and optimization' },
  { value: '99.9%', label: 'Uptime SLA', description: 'Enterprise-grade reliability guarantee' },
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <Badge variant="glass" size="lg" className="px-4 py-2">
              <Layers className="w-4 h-4 mr-2" />
              AI-Powered Development
            </Badge>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Full-Stack Development
            <span className="gradient-text block mt-2">
              Automated by AI
            </span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
            From business requirements to deployed application, our AI agents handle 
            every aspect of modern SaaS development with enterprise-grade quality.
          </motion.p>
        </motion.div>
        
        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card 
                variant="glass" 
                className="h-full p-8 border-white/10 hover:border-white/20 transition-all duration-300 group-hover:shadow-xl"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {feature.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                      Fully Automated
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
              className="text-center"
            >
              <div className="glass rounded-2xl p-6 border-white/10">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Technology Stack */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Built with Modern Technology</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Next.js 16', icon: '⚛️' },
              { name: 'NestJS', icon: '🚀' },
              { name: 'PostgreSQL', icon: '🐘' },
              { name: 'Docker', icon: '🐳' },
              { name: 'Claude AI', icon: '🤖' },
              { name: 'TypeScript', icon: '📘' },
            ].map((tech, index) => (
              <div
                key={index}
                className="glass rounded-xl p-4 border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="text-sm font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}