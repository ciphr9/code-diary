import React from "react";
import "./Overview.scss";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Buttons from "./Buttons";

function Overview(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className={"Overview"}>
      <div className="container padding-vert--xl">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <h2 className="hero__subtitle">{siteConfig.tagline}</h2>
        <img className="Overview-logo" src="img/logo.png" alt={`logo`} />
        <Buttons />
      </div>
    </div>
  );
}

export default Overview;
