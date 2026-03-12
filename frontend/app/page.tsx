'use client'

import { useState } from 'react'
import { ArrowRight, Check, Code2, Zap, Shield, Users, Clock, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/navigation'
import { ProjectWizard } from '@/components/project-wizard'

export default function HomePage() {
  const [showWizard, setShowWizard] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Clean & Professional */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container">
          <div className="max-w-4xl">
            <div className="space-y-8">
              {/* Badge */}
              <Badge variant="secondary" className="inline-flex items-center gap-2 px-3 py-1">
                <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
                AI-Powered Development Platform
              </Badge>
              
              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Build enterprise SaaS
                  <span className="block text-brand-600">
                    in days, not months
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Let AI agents handle the complexity. Transform your ideas into production-ready 
                  SaaS applications with enterprise-grade security and modern architecture.
                </p>
              </div>
              
              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3"
                  onClick={() => setShowWizard(true)}
                >
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-3"
                >
                  View Demo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center gap-8 pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" />
                  <span>2-7 days to deployment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" />
                  <span>Enterprise security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" />
                  <span>Source code ownership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Systematic Grid */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Full-stack development, automated
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From requirements gathering to deployment, our AI agents handle every 
              aspect of modern SaaS development with enterprise-grade quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Code Generation",
                description: "Production-ready React, TypeScript, and Node.js code with proper architecture patterns.",
                stats: "10+ AI specialists"
              },
              {
                icon: Shield,
                title: "Security by Default",
                description: "Built-in SOC2 compliance, GDPR readiness, and enterprise-grade security measures.",
                stats: "99.9% uptime SLA"
              },
              {
                icon: Zap,
                title: "Rapid Deployment",
                description: "From idea to live application in days with automated testing and deployment.",
                stats: "2-7 day delivery"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Real-time progress tracking and seamless handoffs between AI agents.",
                stats: "24/7 monitoring"
              },
              {
                icon: Clock,
                title: "Time to Market",
                description: "Reduce development cycles by 90% while maintaining enterprise quality standards.",
                stats: "90% faster delivery"
              },
              {
                icon: Check,
                title: "Quality Assurance",
                description: "Automated testing, code review, and optimization for performance and security.",
                stats: "95% success rate"
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 h-full border border-border hover:border-brand-200 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-brand-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="text-xs font-medium text-brand-600">
                      {feature.stats}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Process Timeline */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="max-w-3xl mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              From idea to deployment
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our streamlined process transforms your concept into a fully deployed 
              SaaS application in record time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Describe Your Idea",
                description: "Tell our AI what you want to build through natural conversation.",
                duration: "5 minutes"
              },
              {
                step: "02", 
                title: "AI Analysis",
                description: "Multiple specialized agents analyze requirements and create architecture.",
                duration: "2-4 hours"
              },
              {
                step: "03",
                title: "Development",
                description: "Automated code generation, testing, and quality assurance.",
                duration: "1-5 days"
              },
              {
                step: "04",
                title: "Deployment",
                description: "Automated deployment to your infrastructure with monitoring.",
                duration: "30 minutes"
              },
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mb-4 mx-auto">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {phase.description}
                  </p>
                  <div className="text-xs font-medium text-brand-600">
                    {phase.duration}
                  </div>
                </div>
                
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-border -ml-6 -mr-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Clean & Clear */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose the plan that fits your needs. All plans include full source code 
              ownership and enterprise support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "€299",
                description: "Perfect for MVPs and simple applications",
                features: [
                  "1 SaaS project",
                  "Basic AI agents",
                  "Standard templates",
                  "Community support",
                  "Basic deployment"
                ],
                popular: false
              },
              {
                name: "Professional",
                price: "€799", 
                description: "Ideal for growing businesses",
                features: [
                  "3 SaaS projects",
                  "Advanced AI agents",
                  "Premium templates",
                  "Priority support",
                  "Multi-environment deployment",
                  "Custom integrations"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "€1,999",
                description: "For organizations with complex needs",
                features: [
                  "Unlimited projects",
                  "All AI agents",
                  "Custom templates",
                  "Dedicated support",
                  "Enterprise deployment",
                  "SLA guarantee",
                  "Custom training"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 relative ${
                  plan.popular 
                    ? 'border-brand-500 shadow-lg' 
                    : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-brand-500 text-white">Most Popular</Badge>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-brand-500 hover:bg-brand-600 text-white' 
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Clean & Focused */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to build your SaaS?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join hundreds of founders who trust our platform to bring their ideas to life.
            </p>
            <Button 
              size="lg" 
              className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3"
              onClick={() => setShowWizard(true)}
            >
              Start Building Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-lg">Forge</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Built by Emji</span>
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