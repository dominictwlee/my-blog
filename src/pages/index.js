import React from 'react';
import Link from 'gatsby-link';

import BlogEntry from '../components/blogEntry';

import styles from './index.module.scss';

const BlogIndex = () => (
  <div>
    <BlogEntry />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default BlogIndex;
