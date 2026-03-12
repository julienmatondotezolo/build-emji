'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react'
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
      staggerChildren: 0.1
    }
  }
}

const plans = [
  {
    name: 'Starter',
    price: 299,
    originalPrice: 499,
    description: 'Perfect for individual entrepreneurs and small projects',
    icon: Rocket,
    color: 'from-blue-500 to-cyan-500',
    popular: false,
    features: [
      '1 SaaS project per month',
      'Basic AI agents (5 types)',
      'Standard templates',
      'Community support',
      'Basic monitoring',
      'Standard deployment',
      'Basic customization'
    ],
    limitations: [
      'Single project at a time',
      'Standard response time (24h)',
      'Basic integrations only'
    ]
  },
  {
    name: 'Growth',
    price: 799,
    originalPrice: 1299,
    description: 'Ideal for agencies and growing businesses',
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
    popular: true,
    features: [
      '3 SaaS projects per month',
      'Advanced AI agents (10+ types)',
      'Premium templates',
      'Priority support',
      'Advanced monitoring',
      'Multi-environment deployment',
      'Custom branding',
      'API access',
      'Advanced integrations'
    ],
    limitations: [
      'Up to 3 concurrent projects',
      'Priority response time (8h)'
    ]
  },
  {
    name: 'Enterprise',
    price: 1999,
    originalPrice: 3999,
    description: 'For large organizations with complex requirements',
    icon: Crown,
    color: 'from-orange-500 to-red-500',
    popular: false,
    features: [
      'Unlimited SaaS projects',
      'All AI agents + custom agents',
      'Custom templates',
      'Dedicated support manager',
      'Enterprise monitoring',
      'Multi-cloud deployment',
      'Full white-labeling',
      'Advanced API access',
      'Custom integrations',
      'SLA guarantee',
      'On-premise deployment',
      'Custom training'
    ],
    limitations: []
  }
]

export function PricingSection() {
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
              <Star className="w-4 h-4 mr-2" />
              Launch Special - 40% Off
            </Badge>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Transparent Pricing
            <span className="gradient-text block mt-2">
              No Hidden Costs
            </span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
            Choose the plan that fits your needs. All plans include full source code 
            ownership and lifetime updates for your generated projects.
          </motion.p>
        </motion.div>
        
        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge variant="gradient" className="px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card 
                variant={plan.popular ? "elevated" : "glass"} 
                className={`h-full p-8 ${
                  plan.popular 
                    ? 'border-brand-500/50 shadow-brand-500/20' 
                    : 'border-white/10 hover:border-white/20'
                } transition-all duration-300`}
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-3xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {plan.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm text-muted-foreground line-through">
                          €{plan.originalPrice}
                        </span>
                        <Badge variant="destructive" size="sm">-40%</Badge>
                      </div>
                      <div className="text-4xl font-bold">
                        €{plan.price}
                        <span className="text-lg font-normal text-muted-foreground">
                          /month
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="flex-1 space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.length > 0 && (
                      <div className="pt-4 border-t border-white/10">
                        <div className="text-xs text-muted-foreground mb-2">Limitations:</div>
                        {plan.limitations.map((limitation, limitIndex) => (
                          <div key={limitIndex} className="flex items-start text-xs text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-muted-foreground/50 mr-2 mt-1.5 flex-shrink-0" />
                            <span>{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* CTA Button */}
                  <Button
                    size="lg"
                    variant={plan.popular ? "gradient" : "outline"}
                    className={`w-full ${
                      plan.popular 
                        ? 'text-white border-0 shadow-lg' 
                        : 'border-white/20'
                    }`}
                  >
                    {plan.popular ? 'Start Building' : 'Get Started'}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enterprise Contact */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card variant="glass" className="inline-block p-8 border-white/10 max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Large enterprise with specific requirements? Let's discuss a custom plan.
            </p>
            <Button variant="outline" className="border-white/20">
              Contact Sales
            </Button>
          </Card>
        </motion.div>
        
        {/* Value Props */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Source Code Ownership',
              description: 'You own 100% of the generated code. No vendor lock-in.',
              icon: '🔓'
            },
            {
              title: 'Lifetime Updates',
              description: 'Free security patches and dependency updates for your projects.',
              icon: '🔄'
            },
            {
              title: '30-Day Guarantee',
              description: 'Not satisfied? Get a full refund within 30 days.',
              icon: '✅'
            }
          ].map((prop, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
              className="text-center"
            >
              <div className="text-4xl mb-4">{prop.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{prop.title}</h4>
              <p className="text-sm text-muted-foreground">{prop.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}