import { Button } from '@/components/ui/button';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StandardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export default function StandardButton({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  asChild = false,
  ...props 
}: StandardButtonProps) {
  const baseClasses = "font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary", 
    'outline-white': "btn-outline-white"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <Button
      asChild={asChild}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
