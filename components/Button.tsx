
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden group";
  
  const variants = {
    // Primary: Orange with a diagonal light shimmer animation
    primary: "bg-brand-orange text-white hover:bg-[#e08c45] shadow-[0_10px_20px_-5px_rgba(239,157,86,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(239,157,86,0.5)] hover:-translate-y-1 focus:ring-brand-orange px-8 py-4 text-base tracking-wide",
    
    // Secondary: Teal with subtle glow
    secondary: "bg-brand-teal text-white hover:bg-[#63959e] shadow-[0_10px_20px_-5px_rgba(116,166,175,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(116,166,175,0.5)] hover:-translate-y-0.5 focus:ring-brand-teal px-8 py-4 text-base tracking-wide",
    
    // Outline: Clean border for secondary actions
    outline: "border-2 border-brand-dark/20 text-brand-dark hover:border-brand-dark hover:bg-brand-dark hover:text-white focus:ring-brand-dark px-8 py-3.5 text-base",
    
    // Ghost: Text only
    ghost: "text-brand-dark hover:bg-slate-100 hover:text-brand-orange px-6 py-3"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Shimmer Effect for Primary Buttons */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 pointer-events-none" />
      )}

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </button>
  );
};
