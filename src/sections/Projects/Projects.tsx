import { useRepos } from './useRepos';
import { StyledProject } from './StyledProject';
import { DEFAULT_FLEX_CONTAINER_STYLES } from '../../constants';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader } from '../../fragments';

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
        style={{ ...DEFAULT_FLEX_CONTAINER_STYLES, flexDirection: 'column' }}
      >
        {repos.map((repo) => (
          <a
            href={repo['html_url']}
            target="_blank"
            style={{ width: '100%' }}
            key={repo.id}
          >
            <StyledProject key={repo.id}>
              <h3 style={{ marginLeft: '20px' }}>{repo.name}</h3>
              <h4 style={{ marginLeft: '20px', color: 'gray' }}>
                {repo.description}
              </h4>
            </StyledProject>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
