import { projects } from './projectsList';
import { ProjectCard } from './ProjectCard';
import { DEFAULT_FLEX_CONTAINER_STYLES } from '../../constants';
import { AnimatePresence, motion } from 'framer-motion';

export const Projects = () => {

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeIn', delay: 0.3 }}
        style={{
          ...DEFAULT_FLEX_CONTAINER_STYLES,
          flexDirection: 'row',
          width: '88%',
          gap: '16px',
          alignItems: 'stretch',
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
