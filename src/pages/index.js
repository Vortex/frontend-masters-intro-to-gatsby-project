import { Link, useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <header>
          <Link to="/">{meta.title}</Link>
      </header>
      <main>
        <h1>Hello frontend masters</h1>
        <Link to="/about">About this page</Link>
      </main>
    </>
  );
}
