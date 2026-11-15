import styled from 'styled-components';

export const StyledWriting = styled.section`
  width: min(88%, 720px);
  margin: 0 auto;
  color: #242424;

  .writing-list,
  .writing-detail {
    width: 100%;
  }

  .writing-list-header {
    margin-bottom: 32px;
  }

  .writing-list-header h2,
  .writing-article-header h2 {
    margin: 0;
    color: #171717;
    font-weight: 500;
    letter-spacing: 0.01em;
  }

  .writing-list-header h2 {
    font-size: 1.8rem;
  }

  .writing-list-header p {
    margin: 10px 0 0;
    color: rgba(55, 55, 55, 0.76);
    line-height: 1.55;
  }

  .writing-entries {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgb(210, 210, 210);
  }

  .writing-entry {
    padding: 24px 4px;
    border-bottom: 1px solid rgb(210, 210, 210);
  }

  .writing-entry h3 {
    margin: 9px 0 8px;
    font-size: 1.28rem;
    line-height: 1.35;
  }

  .writing-entry h3 button {
    -webkit-appearance: none;
    appearance: none;
    padding: 0;
    border: 0;
    background: transparent;
    color: #171717;
    font: inherit;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
    transition: color 0.16s ease-in-out;
  }

  .writing-entry h3 button:hover {
    color: #515151;
  }

  .writing-entry h3 button:focus-visible,
  .writing-back:focus-visible,
  .writing-article-header h2:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }

  .writing-entry p {
    margin: 0;
    color: rgba(55, 55, 55, 0.8);
    line-height: 1.6;
  }

  .writing-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 7px;
    color: rgba(70, 70, 70, 0.68);
    font-size: 0.8rem;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  .writing-back {
    -webkit-appearance: none;
    appearance: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 28px;
    padding: 8px 0;
    border: 0;
    background: transparent;
    color: rgba(35, 35, 35, 0.78);
    font-family: 'Oxygen', sans-serif;
    font-size: 0.9rem;
    cursor: pointer;
    transition: color 0.16s ease-in-out;
  }

  .writing-back:hover {
    color: #111;
  }

  .writing-back-bottom {
    margin: 36px 0 0;
  }

  .writing-article-header {
    margin-bottom: 36px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgb(210, 210, 210);
  }

  .writing-article-header h2 {
    margin-bottom: 14px;
    font-size: clamp(1.8rem, 4vw, 2.45rem);
    line-height: 1.2;
  }

  .writing-prose {
    color: rgba(32, 32, 32, 0.9);
    font-size: 1rem;
    line-height: 1.78;
    overflow-wrap: anywhere;
  }

  .writing-prose > :first-child {
    margin-top: 0;
  }

  .writing-prose > :last-child {
    margin-bottom: 0;
  }

  .writing-prose h1,
  .writing-prose h2,
  .writing-prose h3,
  .writing-prose h4,
  .writing-prose h5,
  .writing-prose h6 {
    margin: 2em 0 0.7em;
    color: #181818;
    font-weight: 500;
    line-height: 1.3;
  }

  .writing-prose h1,
  .writing-prose h2 {
    font-size: 1.55rem;
  }

  .writing-prose h3 {
    font-size: 1.3rem;
  }

  .writing-prose p,
  .writing-prose ul,
  .writing-prose ol,
  .writing-prose blockquote,
  .writing-prose pre,
  .writing-prose table {
    margin: 0 0 1.35em;
  }

  .writing-prose ul,
  .writing-prose ol {
    padding-left: 1.5em;
  }

  .writing-prose li + li {
    margin-top: 0.35em;
  }

  .writing-prose .contains-task-list,
  .writing-prose .task-list-item {
    list-style: none;
  }

  .writing-prose .contains-task-list {
    padding-left: 0;
  }

  .writing-prose input[type='checkbox'] {
    margin-right: 8px;
  }

  .writing-prose a {
    color: #25255d;
    text-underline-offset: 3px;
  }

  .writing-prose a:hover {
    color: #10103e;
  }

  .writing-prose blockquote {
    padding: 2px 0 2px 20px;
    border-left: 3px solid rgb(190, 190, 190);
    color: rgba(55, 55, 55, 0.75);
  }

  .writing-prose blockquote > :last-child {
    margin-bottom: 0;
  }

  .writing-prose code {
    padding: 0.14em 0.34em;
    border: 1px solid rgba(205, 205, 205, 0.8);
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.54);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.9em;
  }

  .writing-prose pre {
    max-width: 100%;
    padding: 18px;
    overflow-x: auto;
    border: 1px solid rgb(205, 205, 205);
    background: rgba(255, 255, 255, 0.56);
    line-height: 1.55;
  }

  .writing-prose pre code {
    padding: 0;
    border: 0;
    background: transparent;
    font-size: 0.86rem;
  }

  .writing-prose .hljs-comment,
  .writing-prose .hljs-quote {
    color: rgba(60, 60, 60, 0.58);
    font-style: italic;
  }

  .writing-prose .hljs-keyword,
  .writing-prose .hljs-selector-tag,
  .writing-prose .hljs-type,
  .writing-prose .hljs-title,
  .writing-prose .hljs-section {
    color: #202020;
    font-weight: 650;
  }

  .writing-prose .hljs-string,
  .writing-prose .hljs-attr,
  .writing-prose .hljs-symbol,
  .writing-prose .hljs-template-variable {
    color: #5c5c5c;
  }

  .writing-prose .hljs-number,
  .writing-prose .hljs-literal,
  .writing-prose .hljs-built_in {
    color: #373737;
    font-weight: 500;
  }

  .writing-prose table {
    display: block;
    width: 100%;
    overflow-x: auto;
    border-collapse: collapse;
  }

  .writing-prose th,
  .writing-prose td {
    min-width: 120px;
    padding: 10px 12px;
    border: 1px solid rgb(205, 205, 205);
    text-align: left;
  }

  .writing-prose th {
    background: rgba(255, 255, 255, 0.5);
    font-weight: 500;
  }

  .writing-prose hr {
    margin: 2.2em 0;
    border: 0;
    border-top: 1px solid rgb(205, 205, 205);
  }

  @media only screen and (max-width: 600px) {
    width: 90%;

    .writing-list-header {
      margin-bottom: 24px;
    }

    .writing-list-header h2 {
      font-size: 1.55rem;
    }

    .writing-entry {
      padding: 21px 2px;
    }

    .writing-entry h3 {
      font-size: 1.16rem;
    }

    .writing-article-header {
      margin-bottom: 28px;
      padding-bottom: 20px;
    }

    .writing-article-header h2 {
      font-size: 1.75rem;
    }

    .writing-prose {
      font-size: 0.96rem;
      line-height: 1.72;
    }

    .writing-prose pre {
      padding: 14px;
    }
  }
`;
