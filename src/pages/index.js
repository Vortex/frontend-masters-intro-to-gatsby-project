import { Link } from 'gatsby';
import * as React from 'react';
import { Layout } from '../components/layout';

export default function IndexPage() {

  return (
    <>
        <Layout>
            <h1>Hello frontend masters</h1>
            <Link to="/about">About this page</Link>
        </Layout>
    </>
  );
}
