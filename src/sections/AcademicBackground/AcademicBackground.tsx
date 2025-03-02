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
            <h3><span>{era.center}</span></h3>
            <h4><span>{era.title}</span></h4>
            {era.subtitle && <h4><span>{era.subtitle}</span></h4>}
          </StyledEra>
        ))}
      </motion.div>
    </AnimatePresence>
  ) : (
    <Loader />
  );
};