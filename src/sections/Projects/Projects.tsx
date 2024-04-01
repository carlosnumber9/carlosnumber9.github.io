import { useRepos } from './useRepos';
import { StyledProject } from './StyledProject';
import { DEFAULT_FLEX_CONTAINER_STYLES } from '../../constants';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader } from '../../fragments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

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
          width: '80%',
          gap: '5px',
        }}
      >
        {repos.map((repo) => (
          <StyledProject key={repo.id}>
            <h3 style={{ marginLeft: '20px' }}>{repo.name}</h3>
            <h4 style={{ marginLeft: '20px', color: 'gray' }}>
              {repo.description}
            </h4>
            <a
              href={repo['html_url']}
              target="_blank"
              style={{ position: 'absolute', right: '5px', top: '5px' }}
              key={repo.id}
            >
              <FontAwesomeIcon icon={faCodeBranch} size="lg" className='repo-icon' />
            </a>
          </StyledProject>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
