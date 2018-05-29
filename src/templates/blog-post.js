import React from 'react';

import styles from './blog-post.module.css';

const BlogTemplate = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export default BlogTemplate;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
