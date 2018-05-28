import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

//  Components
import Header from '../components/header';

//  Styles
import 'minireset.css';
import 'typeface-open-sans';
import 'typeface-alegreya';
import './index.scss';

const Layout = ({ children, data }) => (
  <div>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>{children()}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
