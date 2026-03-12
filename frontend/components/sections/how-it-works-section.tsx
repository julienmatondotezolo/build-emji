'use client'

import { motion } from 'framer-motion'
import { 
  MessageSquare, 
  Brain, 
  Code, 
  Rocket, 
  ArrowRight,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const steps = [
  {
    step: 1,
    icon: MessageSquare,
    title: 'Describe Your Idea',
    description: 'Tell our AI what kind of SaaS you want to build. Our business analyst asks smart questions to understand your vision.',
    details: ['Natural language input', 'Intelligent follow-up questions', 'Requirement validation'],
    color: 'from-blue-500 to-cyan-500',
    duration: '5-10 minutes'
  },
  {
    step: 2,
    icon: Brain,
    title: 'AI Agents Collaborate',
    description: 'Multiple specialized AI agents work in parallel - architect, designer, developer, and QA engineer.',
    details: ['Technical architecture design', 'UI/UX mockup generation', 'Database schema planning'],
    color: 'from-purple-500 to-pink-500',
    duration: '2-4 hours'
  },
  {
    step: 3,
    icon: Code,
    title: 'Code Generation',
    description: 'Production-ready code is generated with modern patterns, best practices, and enterprise security.',
    details: ['Frontend components', 'Backend APIs', 'Database migrations', 'Authentication'],
    color: 'from-green-500 to-emerald-500',
    duration: '4-8 hours'
  },
  {
    step: 4,
    icon: Rocket,
    title: 'Deploy & Monitor',
    description: 'Your SaaS is automatically deployed to your infrastructure with monitoring and optimization.',
    details: ['Docker containerization', 'SSL certificates', 'Performance monitoring'],
    color: 'from-orange-500 to-red-500',
    duration: '30 minutes'
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
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
              <Users className="w-4 h-4 mr-2" />
              AI Agent Workflow
            </Badge>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            From Idea to
            <span className="gradient-text block mt-2">
              Live SaaS in Days
            </span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
            Our AI-powered workflow transforms your concept into a fully deployed 
            SaaS application while you focus on your business strategy.
          </motion.p>
        </motion.div>
        
        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8 lg:space-y-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step Card */}
              <div className="flex-1 max-w-lg">
                <Card variant="glass" className="p-8 border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mr-4`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        Step {step.step}
                      </Badge>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    Duration: {step.duration}
                  </div>
                </Card>
              </div>
              
              {/* Visual Element */}
              <div className="flex-1 max-w-md">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`aspect-square rounded-3xl bg-gradient-to-br ${step.color} p-1`}
                >
                  <div className="w-full h-full rounded-3xl bg-background/95 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4`}>
                        <step.icon className="w-12 h-12 text-white" />
                      </div>
                      <div className="text-lg font-semibold mb-2">{step.title}</div>
                      <Badge variant="secondary" size="sm">
                        {step.duration}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Arrow (except for last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-16">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Timeline Summary */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card variant="glass" className="inline-block p-8 border-white/10">
            <h3 className="text-2xl font-bold mb-4">Total Time to Deployment</h3>
            <div className="text-5xl font-bold gradient-text mb-2">2-7 Days</div>
            <p className="text-muted-foreground mb-6">
              vs 3-6 months with traditional development
            </p>
            <Button size="lg" className="gradient-primary text-white border-0">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}