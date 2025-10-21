import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StandardCardProps {
  variant?: 'primary' | 'secondary' | 'dark';
  children: ReactNode;
  className?: string;
}

interface StandardCardHeaderProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

interface StandardCardContentProps {
  children: ReactNode;
  className?: string;
}

export function StandardCard({ 
  variant = 'primary', 
  children, 
  className 
}: StandardCardProps) {
  const variantClasses = {
    primary: "card-primary",
    secondary: "card-secondary",
    dark: "card-dark"
  };

  return (
    <Card className={cn(variantClasses[variant], className)}>
      {children}
    </Card>
  );
}

export function StandardCardHeader({ 
  title, 
  description, 
  children, 
  className 
}: StandardCardHeaderProps) {
  return (
    <CardHeader className={cn("space-y-2", className)}>
      {title && <CardTitle className="text-heading-3">{title}</CardTitle>}
      {description && <CardDescription className="text-body">{description}</CardDescription>}
      {children}
    </CardHeader>
  );
}

export function StandardCardContent({ 
  children, 
  className 
}: StandardCardContentProps) {
  return (
    <CardContent className={cn("space-y-4", className)}>
      {children}
    </CardContent>
  );
}
