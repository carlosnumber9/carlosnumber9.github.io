import { AnimatePresence, motion } from 'framer-motion';
import { StyledLoading } from './StyledLoading';

export const Loader: React.FC = () => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <StyledLoading />
    </motion.div>
  </AnimatePresence>
);
