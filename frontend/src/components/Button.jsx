import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';

/**
 * Button Component
 * Premium button with multiple variants, sizes, and animation support
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  external = false,
  fullWidth = false,
  disabled = false,
  className = '',
  onClick,
  ...props
}) => {
  // Base styles
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Variant styles
  const variants = {
    primary: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 focus:ring-emerald-500 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-stone-900 border border-stone-200 hover:bg-stone-50 focus:ring-stone-500 shadow-sm hover:shadow-md',
    outline: 'border-2 border-stone-300 text-stone-900 hover:bg-stone-50 focus:ring-stone-500 hover:border-stone-400',
    accent: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 focus:ring-amber-500 shadow-md hover:shadow-lg',
  };

  // Size styles
  const sizes = {
    xs: 'px-3 py-1.5 text-xs gap-2',
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-2.5 text-sm gap-2',
    lg: 'px-8 py-3 text-base gap-3',
    xl: 'px-10 py-4 text-lg gap-3',
  };

  const buttonClasses = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  );

  // Motion variants for button animation
  const motionVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)' },
    tap: { scale: 0.97 },
  };

  const content = (
    <motion.div
      className={buttonClasses}
      variants={motionVariants}
      initial="initial"
      whileHover={!disabled ? 'hover' : 'initial'}
      whileTap={!disabled ? 'tap' : 'initial'}
      {...props}
    >
      {children}
    </motion.div>
  );

  // External link
  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : '_self'}
        rel={external ? 'noopener noreferrer' : ''}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  // Internal route link
  if (to) {
    return (
      <Link to={to} className="inline-block">
        {content}
      </Link>
    );
  }

  // Regular button
  return (
    <motion.button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      variants={motionVariants}
      initial="initial"
      whileHover={!disabled ? 'hover' : 'initial'}
      whileTap={!disabled ? 'tap' : 'initial'}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default React.memo(Button);