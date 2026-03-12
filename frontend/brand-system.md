# Forge - SaaS Builder Brand System

## Brand Identity

### **Brand Name:** Forge
**Tagline:** "Where Ideas Become Software"

### **Brand Personality:**
- **Professional**: Enterprise-ready, trustworthy
- **Efficient**: Fast, systematic, no-nonsense  
- **Intelligent**: AI-powered, smart automation
- **Reliable**: Consistent results, dependable

### **Brand Voice:**
- Clear and direct communication
- Confident but not arrogant
- Technical accuracy without jargon
- Helpful and solution-focused

## Visual Identity

### **Logo Concept:**
- Minimalist geometric mark
- Represents "forging" (creation/building)  
- Works at small sizes
- Monochromatic with brand color accent

### **Color System** (Systematic, Not Arbitrary)

#### **Primary Brand Color:**
```css
--brand-primary: #0066FF; /* Strong, confident blue */
--brand-primary-50: #F0F7FF;
--brand-primary-100: #E0EFFF;
--brand-primary-200: #B8DCFF;
--brand-primary-300: #85C1FF;
--brand-primary-400: #52A6FF;
--brand-primary-500: #0066FF; /* Main brand */
--brand-primary-600: #0052CC;
--brand-primary-700: #003D99;
--brand-primary-800: #002966;
--brand-primary-900: #001433;
--brand-primary-950: #000A1A;
```

#### **Neutral System:**
```css
--neutral-0: #FFFFFF;    /* Pure white */
--neutral-50: #FAFAFA;   /* Background */
--neutral-100: #F5F5F5;  /* Light background */
--neutral-200: #E5E5E5;  /* Borders */
--neutral-300: #D4D4D4;  /* Disabled elements */
--neutral-400: #A3A3A3;  /* Placeholder text */
--neutral-500: #737373;  /* Secondary text */
--neutral-600: #525252;  /* Body text */
--neutral-700: #404040;  /* Headings */
--neutral-800: #262626;  /* Strong emphasis */
--neutral-900: #171717;  /* Maximum contrast */
--neutral-950: #0A0A0A;  /* Pure black */
```

#### **Functional Colors:**
```css
--success-500: #10B981;
--warning-500: #F59E0B;
--error-500: #EF4444;
--info-500: #3B82F6;
```

## Typography System

### **Font Stack:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
```

### **Type Scale:** (1.125 ratio - mathematical progression)
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */
```

### **Font Weights:**
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

## Spacing System

### **Base Unit:** 4px (0.25rem)
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

## Component Design Principles

### **Buttons:**
- Primary: Brand color, high contrast
- Secondary: Subtle border, neutral
- Text: Minimal, clear hierarchy
- Consistent padding: 12px/16px
- Border radius: 6px (subtle, not overdone)

### **Cards:**
- Subtle border: 1px solid neutral-200
- Light shadow: Only when elevated
- Padding: 24px (systematic)
- Border radius: 8px

### **Form Elements:**
- Clear labels and hierarchy
- Consistent sizing and spacing
- Accessible focus states
- Error states with clear messaging

## Motion Principles

### **Duration:**
- Micro-interactions: 150ms
- Component transitions: 250ms
- Page transitions: 400ms

### **Easing:**
- Standard: cubic-bezier(0.4, 0, 0.2, 1)
- Bouncy: spring-based for feedback
- Sharp: cubic-bezier(0.4, 0, 1, 1) for exits

### **Purpose:**
- Provide feedback for user actions
- Guide attention to important elements  
- Create sense of spatial relationships
- Never decorative without purpose

## Layout System

### **Container Widths:**
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

### **Grid System:**
- 12-column grid with 24px gutters
- Responsive breakpoints
- Clear content hierarchy

This systematic approach ensures every design decision has a purpose and creates a cohesive, professional experience that builds trust with enterprise customers.