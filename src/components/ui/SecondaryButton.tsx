import React from 'react';

interface SecondaryButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function SecondaryButton({ children, href = "#", className = "", ...props }: SecondaryButtonProps) {
  const isExternal = href.startsWith('http');
  return (
    <a 
      href={href} 
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center px-8 py-4 border border-slate-700 bg-slate-900/50 text-white font-semibold rounded-lg hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
