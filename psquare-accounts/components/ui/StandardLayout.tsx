import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'primary' | 'secondary';
  spacing?: 'section' | 'component' | 'element';
}

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
}

interface FlexProps {
  children: ReactNode;
  className?: string;
  direction?: 'row' | 'col';
  gap?: 'sm' | 'md' | 'lg';
}

export function Section({ 
  children, 
  className, 
  background = 'white',
  spacing = 'section'
}: SectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    light: "bg-brand-light",
    primary: "bg-brand-primary text-white",
    secondary: "bg-brand-secondary text-white"
  };

  const spacingClasses = {
    section: "space-section",
    component: "space-component", 
    element: "space-element"
  };

  return (
    <section className={cn(
      backgroundClasses[background],
      spacingClasses[spacing],
      className
    )}>
      {children}
    </section>
  );
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("container-responsive", className)}>
      {children}
    </div>
  );
}

export function Grid({ children, className, cols = 3 }: GridProps) {
  const gridClasses = {
    1: "grid grid-cols-1 gap-6",
    2: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
    3: "grid-responsive",
    4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
  };

  return (
    <div className={cn(gridClasses[cols], className)}>
      {children}
    </div>
  );
}

export function Flex({ 
  children, 
  className, 
  direction = 'row',
  gap = 'md'
}: FlexProps) {
  const directionClasses = {
    row: "flex flex-col sm:flex-row",
    col: "flex flex-col"
  };

  const gapClasses = {
    sm: "gap-2",
    md: "gap-4", 
    lg: "gap-6"
  };

  return (
    <div className={cn(
      directionClasses[direction],
      gapClasses[gap],
      className
    )}>
      {children}
    </div>
  );
}
