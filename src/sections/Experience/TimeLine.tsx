import React from 'react';
import { motion } from 'framer-motion';

export const Timeline: React.FC = () => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: '50%',
        width: '2px',
        backgroundColor: 'black',
        height: '0px',
        zIndex: 5,
      }}
      animate={{
        height: '100%',
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
      }}
    />
  );
};
