'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  MessageSquare, 
  Users, 
  Zap, 
  Settings,
  Check,
  Bot,
  Lightbulb
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ProjectWizardProps {
  onClose: () => void
}

const steps = [
  {
    id: 'idea',
    title: 'Describe Your Idea',
    description: 'Tell us about your SaaS vision',
    icon: Lightbulb,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'audience',
    title: 'Target Audience',
    description: 'Who will use your SaaS?',
    icon: Users,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'features',
    title: 'Core Features',
    description: 'What should it do?',
    icon: Zap,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'technical',
    title: 'Technical Preferences',
    description: 'How complex should it be?',
    icon: Settings,
    color: 'from-orange-500 to-red-500'
  }
]

const saasTypes = [
  { id: 'ai_chatbot', name: 'AI Chatbot', description: 'Conversational AI for customer support', emoji: '🤖' },
  { id: 'crm', name: 'CRM System', description: 'Customer relationship management', emoji: '📊' },
  { id: 'analytics', name: 'Analytics Dashboard', description: 'Data visualization and insights', emoji: '📈' },
  { id: 'ecommerce', name: 'E-commerce Platform', description: 'Online store and marketplace', emoji: '🛒' },
  { id: 'project_management', name: 'Project Management', description: 'Task and team collaboration', emoji: '📋' },
  { id: 'booking', name: 'Booking System', description: 'Appointments and reservations', emoji: '📅' },
  { id: 'custom', name: 'Custom Solution', description: 'Something unique and specific', emoji: '⭐' },
]

const audiences = [
  { id: 'b2b_enterprise', name: 'Enterprise (B2B)', description: 'Large businesses and corporations', icon: '🏢' },
  { id: 'smb', name: 'Small/Medium Business', description: 'Growing companies and startups', icon: '🚀' },
  { id: 'consumers', name: 'Consumers (B2C)', description: 'Individual users and consumers', icon: '👥' },
  { id: 'developers', name: 'Developers', description: 'Technical users and developers', icon: '💻' },
]

const complexityLevels = [
  { 
    id: 'simple', 
    name: 'Simple', 
    description: 'Basic functionality, quick to deploy', 
    duration: '2-3 days',
    price: '€299',
    features: ['Basic UI', 'Core features only', 'Simple deployment']
  },
  { 
    id: 'standard', 
    name: 'Standard', 
    description: 'Full-featured with integrations', 
    duration: '4-5 days',
    price: '€799', 
    features: ['Modern UI/UX', 'Advanced features', 'Third-party integrations', 'API access']
  },
  { 
    id: 'enterprise', 
    name: 'Enterprise', 
    description: 'Scalable, secure, fully customized', 
    duration: '5-7 days',
    price: '€1999',
    features: ['Custom design system', 'Advanced security', 'Scalable architecture', 'Full customization', 'Priority support']
  },
]

export function ProjectWizard({ onClose }: ProjectWizardProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [projectData, setProjectData] = useState({
    idea: '',
    saasType: '',
    audience: '',
    complexity: '',
    features: [] as string[],
    industry: '',
    integrations: [] as string[],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return projectData.idea.length > 20 && projectData.saasType
      case 1:
        return projectData.audience
      case 2:
        return projectData.features.length > 0
      case 3:
        return projectData.complexity
      default:
        return false
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Project Data:', projectData)
    // TODO: Send to backend API
    
    setIsSubmitting(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden"
      >
        <Card variant="glass" className="border-white/20 backdrop-blur-xl">
          {/* Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold gradient-text">Create Your SaaS</h2>
                <p className="text-muted-foreground">Let's build something amazing together</p>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="rounded-xl"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Progress Steps */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      index <= currentStep 
                        ? `bg-gradient-to-r ${step.color} border-transparent text-white` 
                        : 'border-white/20 text-muted-foreground'
                    }`}>
                      {index < currentStep ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-0.5 mx-2 transition-colors duration-300 ${
                        index < currentStep ? 'bg-green-500' : 'bg-white/20'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 1: Idea */}
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">What's your SaaS idea?</h3>
                      <p className="text-muted-foreground mb-4">
                        Describe your vision in detail. The more specific you are, the better we can help.
                      </p>
                      
                      <div className="glass rounded-xl p-4 border-white/10 mb-4">
                        <textarea
                          value={projectData.idea}
                          onChange={(e) => setProjectData({...projectData, idea: e.target.value})}
                          placeholder="Example: I want to build an AI-powered customer service chatbot that integrates with existing CRM systems and can handle complex inquiries in multiple languages..."
                          className="w-full h-32 bg-transparent border-none outline-none resize-none text-foreground placeholder:text-muted-foreground"
                        />
                        <div className="flex justify-between items-center mt-2">
                          <div className="text-xs text-muted-foreground">
                            {projectData.idea.length} characters (minimum 20)
                          </div>
                          <Badge variant={projectData.idea.length >= 20 ? "success" : "outline"} size="sm">
                            {projectData.idea.length >= 20 ? "Good!" : "Keep going..."}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-3">What type of SaaS is this?</h4>
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                        {saasTypes.map((type) => (
                          <button
                            key={type.id}
                            onClick={() => setProjectData({...projectData, saasType: type.id})}
                            className={`glass rounded-xl p-4 border text-left transition-all duration-200 hover:border-white/30 ${
                              projectData.saasType === type.id 
                                ? 'border-brand-500/50 bg-brand-500/10' 
                                : 'border-white/10'
                            }`}
                          >
                            <div className="text-2xl mb-2">{type.emoji}</div>
                            <div className="font-medium text-sm">{type.name}</div>
                            <div className="text-xs text-muted-foreground">{type.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Audience */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Who's your target audience?</h3>
                      <p className="text-muted-foreground mb-6">
                        Understanding your users helps us design the right experience and pricing model.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {audiences.map((audience) => (
                          <button
                            key={audience.id}
                            onClick={() => setProjectData({...projectData, audience: audience.id})}
                            className={`glass rounded-xl p-6 border text-left transition-all duration-200 hover:border-white/30 ${
                              projectData.audience === audience.id 
                                ? 'border-brand-500/50 bg-brand-500/10' 
                                : 'border-white/10'
                            }`}
                          >
                            <div className="text-3xl mb-3">{audience.icon}</div>
                            <div className="font-semibold mb-1">{audience.name}</div>
                            <div className="text-sm text-muted-foreground">{audience.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-3">Industry (Optional)</h4>
                      <div className="glass rounded-xl p-4 border-white/10">
                        <input
                          type="text"
                          value={projectData.industry}
                          onChange={(e) => setProjectData({...projectData, industry: e.target.value})}
                          placeholder="e.g., Healthcare, Finance, Education, E-commerce..."
                          className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Features */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Core Features</h3>
                      <p className="text-muted-foreground mb-6">
                        What are the essential features your SaaS needs? Select all that apply.
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                          'User Authentication', 'Dashboard', 'Data Analytics', 'API Integration',
                          'File Upload', 'Real-time Chat', 'Email Notifications', 'Payment Processing',
                          'Multi-tenancy', 'Mobile App', 'Reporting', 'Admin Panel',
                          'Search Function', 'Data Export', 'Third-party Integrations', 'Custom Workflows'
                        ].map((feature) => (
                          <button
                            key={feature}
                            onClick={() => {
                              const features = projectData.features.includes(feature)
                                ? projectData.features.filter(f => f !== feature)
                                : [...projectData.features, feature]
                              setProjectData({...projectData, features})
                            }}
                            className={`glass rounded-lg p-3 border text-sm text-left transition-all duration-200 hover:border-white/30 ${
                              projectData.features.includes(feature)
                                ? 'border-brand-500/50 bg-brand-500/10' 
                                : 'border-white/10'
                            }`}
                          >
                            {feature}
                          </button>
                        ))}
                      </div>
                      
                      <div className="mt-4">
                        <Badge variant="outline" className="px-3 py-1">
                          {projectData.features.length} features selected
                        </Badge>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Technical Preferences */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Technical Complexity</h3>
                      <p className="text-muted-foreground mb-6">
                        Choose the level of complexity that fits your needs and timeline.
                      </p>
                      
                      <div className="space-y-4">
                        {complexityLevels.map((level) => (
                          <button
                            key={level.id}
                            onClick={() => setProjectData({...projectData, complexity: level.id})}
                            className={`w-full glass rounded-xl p-6 border text-left transition-all duration-200 hover:border-white/30 ${
                              projectData.complexity === level.id 
                                ? 'border-brand-500/50 bg-brand-500/10' 
                                : 'border-white/10'
                            }`}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <div className="font-semibold text-lg">{level.name}</div>
                                <div className="text-muted-foreground">{level.description}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-lg gradient-text">{level.price}</div>
                                <div className="text-sm text-muted-foreground">{level.duration}</div>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {level.features.map((feature, index) => (
                                <Badge key={index} variant="secondary" size="sm">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="rounded-xl"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              <div className="flex items-center gap-3">
                {currentStep < steps.length - 1 ? (
                  <Button
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="gradient-primary text-white border-0 px-6 rounded-xl"
                  >
                    Next Step
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!canProceed() || isSubmitting}
                    loading={isSubmitting}
                    loadingText="Creating Project..."
                    className="gradient-primary text-white border-0 px-6 rounded-xl"
                  >
                    <Bot className="mr-2 h-4 w-4" />
                    Start Building
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}