import * as React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/layout';

export default function IndexPage() {
  return (
    <>
      <Layout title="About this page" description="Description about this page" >
        <h1>About this site!</h1>
        <Link to="/">Go home</Link>
      </Layout>
    </>
  );
}
