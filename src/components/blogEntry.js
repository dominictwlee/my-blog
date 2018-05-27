import React from 'react';

import styles from './blogEntry.module.scss';

const BlogEntry = () => (
  <div className={styles.container}>
    <article className={styles.blog}>
      <h1 className={styles.title}>This is the title of the blog post</h1>
      <p className={styles.body}>
        Nec ut postea timeam, noster oblique disputando at vix. Per civibus tincidunt ei, nibh expetenda consequuntur
        his no. In postea omnesque repudiare his. Ei illum nominati nam, ex vocibus posidonium mea.
      </p>

      <div className={styles.aside}>
        <span className={styles.tag}>Date</span>
        <span className={styles.tag}>tags</span>
        <span className={styles.tag}>tags</span>
        <span className={styles.tag}>tags</span>
      </div>
    </article>
  </div>
);

export default BlogEntry;
