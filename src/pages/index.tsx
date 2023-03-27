import React from "react";
import "./index.scss";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Overview from "../components/Homepage/Overview";
import Pet from "../components/Homepage/Pet";

function Homepage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Home`} description={`${siteConfig.tagline}`}>
      <Overview />
      <Pet />
    </Layout>
  );
}

export default Homepage;
