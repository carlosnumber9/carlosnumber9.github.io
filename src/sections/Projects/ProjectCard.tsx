import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import type { Project } from './projectsList';
import { StyledProject } from './StyledProject';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [videoStatus, setVideoStatus] = useState<'loading' | 'ready' | 'error'>(
    'loading',
  );
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDemo = Boolean(project.demo) && videoStatus !== 'error';
  const isDemoReady = hasDemo && videoStatus === 'ready';
  const areDetailsVisible = !isDemoReady || isHovered || isExpanded;
  const contentId = `project-${project.id}-details`;

  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    const demo = project.demo;
    if (!card || !video || !demo || !hasDemo) return;

    let isInView = false;

    const updatePlayback = () => {
      if (!isInView || document.hidden || prefersReducedMotion) {
        video.pause();
        return;
      }

      if (video.getAttribute('src') !== demo) {
        video.src = demo;
      }

      void video.play().catch(() => {});
    };

    const observer =
      typeof IntersectionObserver === 'undefined'
        ? undefined
        : new IntersectionObserver(
            ([entry]) => {
              isInView = entry.isIntersecting;
              updatePlayback();
            },
            { threshold: 0.1 },
          );

    if (observer) {
      observer.observe(card);
    } else {
      isInView = true;
      updatePlayback();
    }

    document.addEventListener('visibilitychange', updatePlayback);

    return () => {
      observer?.disconnect();
      document.removeEventListener('visibilitychange', updatePlayback);
      video.pause();
    };
  }, [project.demo, hasDemo, prefersReducedMotion]);

  return (
    <StyledProject
      ref={cardRef}
      data-demo-ready={isDemoReady}
      data-details-visible={areDetailsVisible}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setIsHovered(true);
      }}
      onPointerLeave={() => setIsHovered(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsExpanded(false);
        }
      }}
    >
      {hasDemo && (
        <>
          <video
            ref={videoRef}
            className="project-demo"
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            onLoadedData={() => {
              setVideoStatus('ready');
              if (cardRef.current?.contains(document.activeElement)) {
                setIsExpanded(true);
              }
            }}
            onError={() => setVideoStatus('error')}
          />
          <div className="project-shade" aria-hidden="true" />
        </>
      )}

      {isDemoReady && (
        <button
          className="project-toggle"
          type="button"
          aria-label={`${areDetailsVisible ? 'Hide' : 'Show'} details for ${project.name}`}
          aria-expanded={areDetailsVisible}
          aria-controls={contentId}
          onClick={(event) => {
            if (!isHovered || event.detail === 0) {
              setIsExpanded((expanded) => !expanded);
            }
          }}
        />
      )}

      <div
        id={contentId}
        className="project-content"
        aria-hidden={!areDetailsVisible}
      >
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
      </div>
    </StyledProject>
  );
};
