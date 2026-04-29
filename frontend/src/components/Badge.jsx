import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

/**
 * Badge Component
 * Reusable badge with multiple variants and sizes
 */
const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  animated = true,
  onClick,
  ...props
}) => {
  // Size styles
  const sizes = {
    xs: 'px-2.5 py-1 text-xs',
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
  };

  // Variant styles
  const variants = {
    primary: 'bg-emerald-100 text-emerald-900 border border-emerald-300/50',
    secondary: 'bg-amber-100 text-amber-900 border border-amber-300/50',
    accent: 'bg-blue-100 text-blue-900 border border-blue-300/50',
    stone: 'bg-stone-100 text-stone-900 border border-stone-300/50',
    success: 'bg-emerald-100 text-emerald-900 border border-emerald-300/50',
    warning: 'bg-amber-100 text-amber-900 border border-amber-300/50',
    error: 'bg-red-100 text-red-900 border border-red-300/50',
  };

  const badgeClasses = clsx(
    'inline-flex items-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300',
    sizes[size],
    variants[variant],
    onClick && 'cursor-pointer hover:scale-105',
    className
  );

  return (
    <motion.span
      className={badgeClasses}
      whileHover={animated && onClick ? { scale: 1.05 } : {}}
      whileTap={animated && onClick ? { scale: 0.95 } : {}}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default Badge;