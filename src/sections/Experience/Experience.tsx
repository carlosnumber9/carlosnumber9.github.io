import { AnimatePresence, motion } from 'framer-motion';
import { Job } from '../../declarations';
import { StyledJobInfo } from './StyledJobInfo';
import { Timeline } from './TimeLine';
import { jobs } from './jobs';
import { useDelay } from '../../useDelay';
import { Loader } from '../../fragments';
import { StyledBadge } from './StyledBadge';
import { StyledJob } from './StyledJob';

const getFeatureURL = (text: string) =>
  `https://www.google.com/search?q=${text}`;

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
          minWidth: '80%',
          alignItems: 'center',
        }}
      >
        {jobs.map((job: Job) => (
          <StyledJob key={job.id}>
            <div
              style={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
              className="features"
            >
              {job.features.map((feature: string) => (
                <StyledBadge key={`feature_${feature}`} className="feature">
                  <a href={getFeatureURL(feature)} target="_blank">
                    {feature}
                  </a>
                </StyledBadge>
              ))}
            </div>
            <StyledJobInfo href={job.url} target="_blank" className="info">
              <hr />
              <span>{job.dates}</span>
              <h3>{job.company}</h3>
              <h4> {job.title}</h4>
              <hr />
            </StyledJobInfo>
          </StyledJob>
        ))}
        <Timeline />
      </motion.div>
    </AnimatePresence>
  ) : (
    <Loader />
  );
};
