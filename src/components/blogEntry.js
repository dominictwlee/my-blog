import React, { Fragment } from 'react';
import Link from 'gatsby-link';

import styles from './blogEntry.module.scss';

const BlogEntry = ({ link, title, date, excerpt }) => (
  <Fragment>
    <div className={styles.aside}>
      <span className={styles.tag}>{date}</span>
    </div>
    <div className={styles.blogMain}>
      <Link to={link}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.body}>{excerpt}..</p>
      </Link>
    </div>
  </Fragment>
);

export default BlogEntry;
