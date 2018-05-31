/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const kebabCase = require('lodash/kebabCase');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve('src/templates/blog-post.js');
  const tagTemplate = path.resolve('src/templates/tags.js');

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            html
            id
            frontmatter {
              path
              tags
              date
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;
    let tags = [];

    posts.forEach(({ node }, index) => {
      //  Create detailed blog post page
      const prev = index === 0 ? null : posts[index - 1].node;
      const next = index === posts.length - 1 ? null : posts[index + 1].node;
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev,
          next,
        },
      });

      //Put all found tags into tags
      if (node.frontmatter.tags) {
        tags = tags.concat(node.frontmatter.tags);
      }
    });

    //  Eliminate duplicate tags
    tags = [...new Set(tags)];

    //  Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${kebabCase(tag)}`,
        component: tagTemplate,
        context: {
          tag,
        },
      });
    });
  });
};
