import { AnimatePresence, motion } from 'framer-motion';
import { DEFAULT_FLEX_CONTAINER_STYLES } from '../../constants';
import { eras } from './eras';
import { StyledEra } from './StyledEra';
import { Era } from '../../declarations';

export const AcademicBackground: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeIn', delay: 0.3 }}
        style={{ ...DEFAULT_FLEX_CONTAINER_STYLES, flexDirection: 'column', width: '80%' }}
      >
        {eras.map((era: Era) => (
          <StyledEra href={era.url} key={era.id} target="_blank">
            <div className="era-content">
              <span className="era-dates">{era.dates}</span>
              <h3>{era.center}</h3>
              <h4>{era.title}</h4>
              {era.tags?.length ? (
                <div className="era-tags">
                  {era.tags.map((tag) => (
                    <span className="era-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </StyledEra>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
