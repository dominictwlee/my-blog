import React from 'react';
import Helmet from 'react-helmet';

import styles from './blog-post.module.css';

const BlogTemplate = ({ data, pathContext }) => {
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;
  return (
    <div className={styles.container}>
      <Helmet title={`Dominic Lee - ${post.frontmatter.title}`} />
      <h1 className={styles.title}>{post.frontmatter.title}</h1>
      <h2>{post.frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export default BlogTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
