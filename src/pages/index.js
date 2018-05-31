import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import BlogEntry from '../components/blogEntry';

import styles from './index.module.scss';

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className={styles.container}>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => (
          <BlogEntry
            link={post.frontmatter.path}
            key={post.id}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
          />
        ))}
    </div>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            tags
          }
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`;
