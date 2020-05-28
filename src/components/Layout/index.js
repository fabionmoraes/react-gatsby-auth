import React from 'react';
import { Helmet } from 'react-helmet';
import Maincss from '../../styles/main';
import { Body } from '../../styles/styles';

import { useStaticQuery, graphql } from 'gatsby';
import Header from '../Header';

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
    <>
      <Helmet title={data.site.siteMetadata.title} />
      <Header />
      <Body>
        {children}
      </Body>
      <Maincss />
    </>
  );
}
