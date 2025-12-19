
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'stacked';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'default' }) => {
  return (
    <img 
      src="/Worknova_Logo.webp" 
      alt="Worknova" 
      className={`w-auto object-contain select-none transition-all duration-300 ${className}`}
    />
  );
};
