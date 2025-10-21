import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function DisplayText({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("text-display", className)}>
      {children}
    </h1>
  );
}

export function Heading1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("text-heading-1", className)}>
      {children}
    </h1>
  );
}

export function Heading2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("text-heading-2", className)}>
      {children}
    </h2>
  );
}

export function Heading3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn("text-heading-3", className)}>
      {children}
    </h3>
  );
}

export function BodyLarge({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-body-large", className)}>
      {children}
    </p>
  );
}

export function Body({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-body", className)}>
      {children}
    </p>
  );
}

export function BodySmall({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-body-small", className)}>
      {children}
    </p>
  );
}

export function Caption({ children, className }: TypographyProps) {
  return (
    <span className={cn("text-caption", className)}>
      {children}
    </span>
  );
}
