import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

/**
 * Card Component
 * Reusable premium card container with optional hover animations
 */
const Card = ({ 
  children, 
  className = '', 
  hover = false,
  border = false,
  noPadding = false,
  ...props 
}) => {
  const baseStyles = 'bg-white rounded-2xl transition-all duration-300';
  const hoverStyles = hover ? 'cursor-pointer hover:shadow-xl' : '';
  const borderStyles = border ? 'border border-stone-200/50' : 'shadow-sm';
  const paddingStyles = noPadding ? '' : 'p-6 md:p-8';

  return (
    <motion.div
      className={clsx(baseStyles, hoverStyles, borderStyles, paddingStyles, className)}
      whileHover={hover ? { y: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * CardBody Component
 * Flexible content container for cards
 */
const CardBody = ({ children, className = '', ...props }) => (
  <div className={clsx('p-6 md:p-8', className)} {...props}>
    {children}
  </div>
);

/**
 * CardHeader Component
 * Optional header section for cards
 */
const CardHeader = ({ children, className = '', ...props }) => (
  <div className={clsx('px-6 md:px-8 pt-6 md:pt-8 pb-4', className)} {...props}>
    {children}
  </div>
);

/**
 * CardFooter Component
 * Optional footer section for cards
 */
const CardFooter = ({ children, className = '', ...props }) => (
  <div className={clsx('px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t border-stone-100', className)} {...props}>
    {children}
  </div>
);

export { Card, CardBody, CardHeader, CardFooter };
export default React.memo(Card);
