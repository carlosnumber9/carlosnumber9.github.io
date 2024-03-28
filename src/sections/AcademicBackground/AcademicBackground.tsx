import { AnimatePresence, motion } from 'framer-motion';
import { DEFAULT_FLEX_CONTAINER_STYLES } from '../../constants';
import { eras } from './eras';
import { StyledEra } from './StyledEra';
import { Era } from '../../declarations';
import { useDelay } from '../../useDelay';
import { Loader } from '../../fragments';

export const AcademicBackground: React.FC = () => {
  const isReady: boolean = useDelay();

  return isReady ? (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeIn', delay: 0.3 }}
        style={{ ...DEFAULT_FLEX_CONTAINER_STYLES, flexDirection: 'column', width: '80%' }}
      >
        {eras.map((era: Era) => (
          <StyledEra era={era} key={era.id}>
            <h3 style={{ marginLeft: '20px' }}>{era.center}</h3>
            <h4 style={{ marginLeft: '20px', color: 'gray' }}>{era.title}</h4>
            <h4 style={{ marginLeft: '20px', color: 'gray' }}>{era.subtitle}</h4>
          </StyledEra>
        ))}
      </motion.div>
    </AnimatePresence>
  ) : (
    <Loader />
  );
};
