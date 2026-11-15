import { projects } from './projectsList';
import { StyledProject } from './StyledProject';
import { DEFAULT_FLEX_CONTAINER_STYLES } from '../../constants';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Projects = () => (
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
        <StyledProject key={project.id}>
          <div className="project-heading">
            <span className="project-icon">
              <FontAwesomeIcon icon={faGithub} />
            </span>
            <h3>{project.name}</h3>
          </div>

          <p>{project.description || 'Personal showcase project.'}</p>

          <div className="project-footer">
            <div className="project-tags">
              {project.language && <span>{project.language}</span>}
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name} on GitHub`}
              title={`Open ${project.name} on GitHub`}
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="sm"
                className="repo-icon"
              />
            </a>
          </div>
        </StyledProject>
      ))}
    </motion.div>
  </AnimatePresence>
);
