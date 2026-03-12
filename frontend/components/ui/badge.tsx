import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground border-border',
        success:
          'border-transparent bg-green-500 text-white hover:bg-green-600',
        warning:
          'border-transparent bg-yellow-500 text-white hover:bg-yellow-600',
        info:
          'border-transparent bg-blue-500 text-white hover:bg-blue-600',
        glass:
          'glass border-glass-border text-foreground hover:bg-white/10',
        gradient:
          'gradient-primary text-white border-0 shadow-sm',
        agent: {
          idle: 'agent-idle',
          working: 'agent-working',
          completed: 'agent-completed',
          failed: 'agent-failed',
        }
      },
      size: {
        default: 'px-2.5 py-0.5 text-xs',
        sm: 'px-2 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
        xl: 'px-4 py-1.5 text-base',
      },
      animation: {
        none: '',
        pulse: 'animate-pulse',
        bounce: 'animate-bounce',
        ping: 'animate-ping',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      animation: 'none',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
  onRemove?: () => void
}

function Badge({ 
  className, 
  variant, 
  size, 
  animation,
  icon,
  onRemove,
  children,
  ...props 
}: BadgeProps) {
  return (
    <div 
      className={cn(badgeVariants({ variant, size, animation }), className)} 
      {...props}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 hover:bg-black/10 rounded-full p-0.5 transition-colors"
          aria-label="Remove badge"
        >
          <svg
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  )
}

export { Badge, badgeVariants }