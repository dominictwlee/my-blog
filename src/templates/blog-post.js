import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import styles from './blog-post.module.css';

const BlogTemplate = ({ data, location, pathContext }) => {
  console.log(pathContext);
  const { prev, next } = pathContext;
  const { markdownRemark: post } = data;
  return (
    <div className={styles.container}>
      <nav>
        {prev && <Link to={prev.frontmatter.path}>{prev.frontmatter.title}</Link>}
        {next && <Link to={next.frontmatter.path}>{next.frontmatter.title}</Link>}
      </nav>

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
