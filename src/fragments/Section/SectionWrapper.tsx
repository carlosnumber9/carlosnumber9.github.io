import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DEFAULT_FLEX_CONTAINER_STYLES } from '../../constants';

interface Props {
  children: React.ReactNode;
}

export const SectionWrapper: React.FC<Props> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    setHeight(ref?.current?.offsetHeight ?? 0);
  }, [children]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height }}
        exit={{ height: 0 }}
        transition={{ duration: 0.3, ease: 'easeIn' }}
        style={{
          ...DEFAULT_FLEX_CONTAINER_STYLES,
          marginTop: '30px',
          width: '80%',
          boxShadow:
            ' 0 1em 1em -1em rgba(0, 0, 0, 0.5), 0 -1em 1em -1em rgba(0, 0, 0, 0.5)',
        }}
      >
        <div ref={ref}>{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};
