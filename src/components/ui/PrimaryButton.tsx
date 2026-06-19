import React from 'react';

interface PrimaryButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  icon?: React.ElementType;
}

export function PrimaryButton({ children, href = "#contato", className = "", icon: Icon, ...props }: PrimaryButtonProps) {
  const isExternal = href.startsWith('http');
  return (
    <a 
      href={href} 
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-slate-950 font-bold rounded-lg hover:scroll-m-0 hover:scale-105 hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" aria-hidden="true" />}
    </a>
  );
}
