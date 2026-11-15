import { useRef } from 'react';
import { projects } from './projectsList';
import { ProjectCard } from './ProjectCard';
import { useProjectVeilClip } from './useProjectVeilClip';
import { DEFAULT_FLEX_CONTAINER_STYLES } from '../../constants';
import type { SectionContentProps } from '../../declarations';
import { AnimatePresence, motion } from 'framer-motion';

export const Projects = ({ contentScrollRef }: SectionContentProps) => {
  const projectsRef = useRef<HTMLDivElement>(null);
  useProjectVeilClip(projectsRef, contentScrollRef);

  return (
    <AnimatePresence>
      <motion.div
        ref={projectsRef}
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
