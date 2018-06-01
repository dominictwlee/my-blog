import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';
import Home from '@material-ui/icons/Home';

import styles from './blog-post.module.scss';

import Nav from '../components/nav';

const BlogTemplate = ({ data, location, pathContext }) => {
  console.log(pathContext);
  const { prev, next } = pathContext;
  const { markdownRemark: post } = data;
  return (
    <div className={styles.container}>
      <Nav styleClass="tagNav">
        {prev && (
          <div className={styles.tagWrapper}>
            <NavigateBefore style={{ fontSize: 48 }} />
            <Link to={prev.frontmatter.path}>{prev.frontmatter.title}</Link>
          </div>
        )}
        <Link className={styles.tagWrapper} to="/">
          <Home style={{ fontSize: 40 }} />
        </Link>
        {next && (
          <div className={styles.tagWrapper}>
            <Link to={next.frontmatter.path}>{next.frontmatter.title}</Link>
            <NavigateNext style={{ fontSize: 48 }} />
          </div>
        )}
      </Nav>

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
