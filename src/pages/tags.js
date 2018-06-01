import React from 'react';
import kebabCase from 'lodash/kebabCase';

import Helmet from 'react-helmet';
import Link from 'gatsby-link';

const TagsIndex = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  console.log(group, title);
  return (
    <div>
      <Helmet title={title} />
      <main>
        <h1>Tags</h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000, filter: { frontmatter: { published: { ne: false } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsIndex;
