import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

/**
 * IconBadge Component
 * Reusable icon container with color variants and animations
 */
const IconBadge = ({
  icon,
  variant = 'emerald',
  size = 'md',
  className = '',
  animated = true,
  onClick,
  ...props
}) => {
  // Size styles
  const sizes = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
    xl: 'w-16 h-16',
  };

  // Variant styles (background colors)
  const variants = {
    emerald: 'bg-emerald-100 text-emerald-700',
    teal: 'bg-teal-100 text-teal-700',
    amber: 'bg-amber-100 text-amber-700',
    orange: 'bg-orange-100 text-orange-700',
    blue: 'bg-blue-100 text-blue-700',
    stone: 'bg-stone-100 text-stone-700',
    red: 'bg-red-100 text-red-700',
    green: 'bg-emerald-100 text-emerald-700',
  };

  const badgeClasses = clsx(
    'rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300',
    sizes[size],
    variants[variant],
    onClick && 'cursor-pointer hover:scale-110',
    className
  );

  const iconClasses = clsx(
    size === 'xs' && 'w-3.5 h-3.5',
    size === 'sm' && 'w-4 h-4',
    size === 'md' && 'w-5 h-5',
    size === 'lg' && 'w-6 h-6',
    size === 'xl' && 'w-7 h-7',
  );

  // Clone icon with size classes
  const styledIcon = React.cloneElement(icon, {
    className: clsx(icon.props.className, iconClasses),
  });

  return (
    <motion.div
      className={badgeClasses}
      whileHover={animated && onClick ? { scale: 1.1 } : {}}
      whileTap={animated && onClick ? { scale: 0.95 } : {}}
      onClick={onClick}
      {...props}
    >
      {styledIcon}
    </motion.div>
  );
};

export default IconBadge;