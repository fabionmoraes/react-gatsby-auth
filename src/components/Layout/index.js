import React from 'react';
import { Helmet } from 'react-helmet';

import { useStaticQuery, graphql } from 'gatsby';
import Header from '../Header';

// Global styles and component-specific styles.
import './global.css';
import { Main } from './main';

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Helmet title={data.site.siteMetadata.title} />
      <Header />
      <Main>{children}</Main>
    </div>
  );
}
