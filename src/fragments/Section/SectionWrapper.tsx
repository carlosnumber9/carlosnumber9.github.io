import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  DEFAULT_FLEX_CONTAINER_STYLES,
  MIN_SECTION_HEIGHT,
} from '../../constants';

interface Props {
  children: React.ReactNode;
}

export const SectionWrapper: React.FC<Props> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    // Ensure this runs after the content has been rendered
    const updateHeight = () => {
      const newHeight = ref.current?.offsetHeight ?? MIN_SECTION_HEIGHT;
      setHeight(newHeight);
    };

    // Initial measurement
    updateHeight();

    // Re-measure if the content changes
    const observer = new MutationObserver(updateHeight);
    if (ref.current) {
      observer.observe(ref.current, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
    };
 }, [children]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: MIN_SECTION_HEIGHT }}
        animate={{ height }}
        exit={{ height: MIN_SECTION_HEIGHT }}
        transition={{ duration: 0.3, ease: 'easeIn' }}
        style={{
          ...DEFAULT_FLEX_CONTAINER_STYLES,
          marginTop: '30px',
          width: '80%',
          boxShadow:
            ' 0 1em 1em -1em rgba(0, 0, 0, 0.5), 0 -1em 1em -1em rgba(0, 0, 0, 0.5)',
        }}
      >
        <div ref={ref} style={{ width: '100%' }}>
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
