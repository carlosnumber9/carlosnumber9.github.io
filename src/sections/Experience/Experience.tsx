import { AnimatePresence, motion } from 'framer-motion';
import { Job } from '../../declarations';
import { StyledJob } from './StyledJob';
import { Timeline } from './TimeLine';
import { jobs } from './jobs';
import { useDelay } from '../../useDelay';
import { Loader } from '../../fragments';

export const Experience = () => {
  const isReady = useDelay();
  return isReady ? (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeIn', delay: 0.3 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          minWidth: '450px',
        }}
      >
        {jobs.map((job: Job) => (
          <StyledJob key={job.id}>
            <hr />
            <span>{`${job.dateStart}-${job.dateEnd}`}</span>
            <h3>{job.company}</h3>
            <h4> {job.title}</h4>
            <hr />
          </StyledJob>
        ))}
        <Timeline />
      </motion.div>
    </AnimatePresence>
  ) : (
    <Loader />
  );
};
