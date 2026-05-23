import { useRepos } from './useRepos';
import { StyledProject } from './StyledProject';
import { DEFAULT_FLEX_CONTAINER_STYLES } from '../../constants';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader } from '../../fragments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Projects = () => {
  const { loading, repos } = useRepos();

  return loading ? (
    <Loader />
  ) : (
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
        {repos.map((repo) => (
          <StyledProject key={repo.id}>
            <div className="project-heading">
              <span className="project-icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <h3>{repo.name}</h3>
            </div>

            <p>{repo.description || 'Personal showcase project.'}</p>

            <div className="project-footer">
              <div className="project-tags">
                {repo.language && <span>{repo.language}</span>}
              </div>

              <a
                href={repo['html_url']}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${repo.name} on GitHub`}
                title={`Open ${repo.name} on GitHub`}
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
};
