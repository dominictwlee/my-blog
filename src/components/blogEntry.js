import React from 'react';
import Link from 'gatsby-link';

import styles from './blogEntry.module.scss';

const BlogEntry = ({ link, title, date, excerpt }) => (
  <div className={styles.container}>
    <article className={styles.blog}>
      <Link to={link}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.body}>{excerpt}..</p>
      </Link>

      <div className={styles.aside}>
        <span className={styles.tag}>{date}</span>
        <span className={styles.tag}>tags</span>
        <span className={styles.tag}>tags</span>
        <span className={styles.tag}>tags</span>
      </div>
    </article>
  </div>
);

export default BlogEntry;
