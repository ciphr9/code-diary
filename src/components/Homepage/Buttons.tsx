import React from "react";
import "./Buttons.scss";
import Link from "@docusaurus/Link";

function Buttons(): JSX.Element {
  const getTodaysCodeDiaryPath = (): string => {
    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, "0");
    const day = String(new Date().getDate()).padStart(2, "0");
    return `/docs/${year}/${month}/${day}`;
  };

  return (
    <div className={"Buttons"}>
      <Link
        className="button button--lg button--outline button--secondary"
        to={getTodaysCodeDiaryPath()}
      >
        📅 Today
      </Link>
    </div>
  );
}

export default Buttons;
