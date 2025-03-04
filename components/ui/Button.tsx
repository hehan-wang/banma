import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    outline: 'bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10',
    white: 'bg-white text-blue-600 hover:bg-gray-100',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-4 py-2',
    md: 'px-5 py-2.5',
    lg: 'text-lg px-7 py-3',
  };
  
  const styles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled && 'opacity-60 cursor-not-allowed',
    className
  );
  
  if (href && !disabled) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
