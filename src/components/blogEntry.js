import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';

import styles from './blogEntry.module.scss';

const BlogEntry = ({ link, title, date, excerpt, tags }) => (
  <Fragment>
    <div className={styles.aside}>
      <span>{date}</span>
      {tags.map(tag => (
        <Link to={`/tags/${kebabCase(tag)}`} className={styles.tag}>
          {tag}
        </Link>
      ))}
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
