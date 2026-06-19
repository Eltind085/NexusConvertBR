import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 ${className}`}>
      {children}
    </span>
  );
}
