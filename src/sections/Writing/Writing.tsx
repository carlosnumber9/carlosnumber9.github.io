import { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { posts } from 'virtual:writing-posts';
import type { SectionContentProps } from '../../declarations';
import { StyledWriting } from './StyledWriting';

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

const formatDate = (date: string) =>
  dateFormatter.format(new Date(`${date}T00:00:00Z`));

const getReadingTime = (minutes: number) => `${minutes} min read`;

export const writingPosts = posts;

export const Writing: React.FC<SectionContentProps> = ({ contentScrollRef }) => {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const articleTitleRef = useRef<HTMLHeadingElement>(null);
  const listButtonRefs = useRef(new Map<string, HTMLButtonElement>());
  const previousScrollTopRef = useRef(0);
  const lastOpenedSlugRef = useRef<string | null>(null);
  const shouldRestoreScrollRef = useRef(false);
  const selectedPost = posts.find((post) => post.slug === selectedSlug);

  useLayoutEffect(() => {
    const scrollContainer = contentScrollRef.current;

    if (selectedPost) {
      scrollContainer?.scrollTo({ top: 0, behavior: 'auto' });
      articleTitleRef.current?.focus({ preventScroll: true });
      return;
    }

    if (!shouldRestoreScrollRef.current) return;

    const lastOpenedSlug = lastOpenedSlugRef.current;
    if (lastOpenedSlug) {
      listButtonRefs.current.get(lastOpenedSlug)?.focus({ preventScroll: true });
    }

    scrollContainer?.scrollTo({
      top: previousScrollTopRef.current,
      behavior: 'auto',
    });
    shouldRestoreScrollRef.current = false;
  }, [contentScrollRef, selectedPost]);

  const openPost = (slug: string) => {
    previousScrollTopRef.current = contentScrollRef.current?.scrollTop ?? 0;
    lastOpenedSlugRef.current = slug;
    setSelectedSlug(slug);
  };

  const closePost = () => {
    shouldRestoreScrollRef.current = true;
    setSelectedSlug(null);
  };

  return (
    <StyledWriting aria-label="Writing">
      {selectedPost ? (
        <motion.article
          animate={{ opacity: 1 }}
          className="writing-detail"
          initial={{ opacity: 0 }}
        key={selectedPost.slug}
        transition={{ duration: 0.24, ease: 'easeInOut' }}
      >
          <button className="writing-back" onClick={closePost} type="button">
            <span aria-hidden="true">←</span> Back to Writing
          </button>

          <header className="writing-article-header">
            <h2 lang={selectedPost.language} ref={articleTitleRef} tabIndex={-1}>
              {selectedPost.title}
            </h2>
            <div className="writing-meta" lang="en">
              <time dateTime={selectedPost.date}>
                {formatDate(selectedPost.date)}
              </time>
              <span aria-hidden="true">·</span>
              <span>{selectedPost.language.toUpperCase()}</span>
              <span aria-hidden="true">·</span>
              <span>{getReadingTime(selectedPost.readingMinutes)}</span>
            </div>
          </header>

          <div
            className="writing-prose"
            dangerouslySetInnerHTML={{ __html: selectedPost.html }}
            lang={selectedPost.language}
          />

          <button
            className="writing-back writing-back-bottom"
            onClick={closePost}
            type="button"
          >
            <span aria-hidden="true">←</span> Back to Writing
          </button>
        </motion.article>
      ) : (
        <motion.div
          animate={{ opacity: 1 }}
          className="writing-list"
          initial={{ opacity: 0 }}
          key="writing-list"
          transition={{ duration: 0.24, ease: 'easeInOut' }}
        >
          <div className="writing-entries">
            {posts.map((post) => (
              <article className="writing-entry" key={post.slug}>
                <div className="writing-meta" lang="en">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.language.toUpperCase()}</span>
                  <span aria-hidden="true">·</span>
                  <span>{getReadingTime(post.readingMinutes)}</span>
                </div>
                <h3 lang={post.language}>
                  <button
                    aria-label={`Read ${post.title}`}
                    onClick={() => openPost(post.slug)}
                    ref={(element) => {
                      if (element) listButtonRefs.current.set(post.slug, element);
                      else listButtonRefs.current.delete(post.slug);
                    }}
                    type="button"
                  >
                    {post.title}
                  </button>
                </h3>
                <p lang={post.language}>{post.summary}</p>
              </article>
            ))}
          </div>
        </motion.div>
      )}
    </StyledWriting>
  );
};
