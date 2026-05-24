import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';

interface ScrollCueProps {
  isVisible: boolean;
  onClick: () => void;
}

export const ScrollCue: React.FC<ScrollCueProps> = ({ isVisible, onClick }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.button
        aria-label="Scroll to portfolio sections"
        animate={{ opacity: 1 }}
        className="scroll-cue"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        onClick={onClick}
        transition={{ duration: 0.3, ease: 'easeIn' }}
        type="button"
      >
        <FontAwesomeIcon icon={faAnglesDown} size="2xl" />
      </motion.button>
    )}
  </AnimatePresence>
);
