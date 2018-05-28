import React from 'react';
import Link from 'gatsby-link';

import styles from './header.module.scss';

const Header = ({ siteTitle }) => (
  <div>
    <div className={styles.header}>
      <h1 className={styles.title}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </div>
);

export default Header;
