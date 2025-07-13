import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  href,
}: ButtonProps) => {
  // Define variant styles with proper hover states and contrasting text colors
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark hover:text-white focus:ring-primary/30',
    secondary: 'bg-accent text-white hover:bg-accent-dark hover:text-white focus:ring-accent/30',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/30',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  // Add consistent base styles
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 disabled:opacity-60 disabled:pointer-events-none';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  // If href is provided, render as an anchor tag
  if (href) {
    return (
      <a 
        href={href}
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  // Otherwise render as a button
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;