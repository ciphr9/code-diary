import React from 'react';
import './index.scss';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Overview from '../components/Homepage/Overview';

function Homepage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Home`} description={`${siteConfig.tagline}`}>
      <Overview />
    </Layout>
  );
}

export default Homepage;
