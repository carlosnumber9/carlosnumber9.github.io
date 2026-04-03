import { DEFAULT_FLEX_CONTAINER_STYLES } from '../../constants';
import { Loader } from '../../fragments';
import { useDelay } from '../../useDelay';
import { StyledSkill } from './StyledSkill';
import { skills } from './skillsList';
import { AnimatePresence, motion } from 'framer-motion';

export const Skills: React.FC = () => {
  const isReady: boolean = useDelay();
  return isReady ? (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeIn', delay: 0.3 }}
        style={{ ...DEFAULT_FLEX_CONTAINER_STYLES, flexWrap: 'wrap' }}
      >
        {skills.map((skill) => (
          <a href={skill.anchor} target="_blank" title={skill.name} key={skill.id}>
            <StyledSkill>
              <img src={skill.icon} alt={skill.name} className="icon" />
            </StyledSkill>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  ) : (
    <Loader />
  );
};
