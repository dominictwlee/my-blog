import React from 'react';
import Link from 'gatsby-link';

import BlogEntry from '../components/blogEntry';

import styles from './index.module.scss';

const BlogIndex = ({ data }) => (
  <div className={styles.container}>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <BlogEntry
        key={node.id}
        link={node.fields.slug}
        title={node.frontmatter.title}
        date={node.frontmatter.date}
        excerpt={node.excerpt}
      />
    ))}
    <Link to="/my-files/">Go to file directory</Link>
  </div>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default BlogIndex;
