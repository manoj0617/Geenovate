import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const baseClasses = 'rounded-lg overflow-hidden transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    outlined: 'border border-gray-300 bg-transparent',
    elevated: 'bg-white shadow-md hover:shadow-lg'
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;