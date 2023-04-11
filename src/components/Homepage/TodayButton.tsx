import React from "react";
import Link from "@docusaurus/Link";

function TodayButton(): JSX.Element {
  const getTodaysCodeDiaryPath = (): string => {
    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, "0");
    const day = String(new Date().getDate()).padStart(2, "0");
    return `/docs/${year}/${month}/${day}`;
  };

  return (
    <Link
      className="TodayButton button button--lg button--outline button--secondary"
      to={getTodaysCodeDiaryPath()}
    >
      📅 Today
    </Link>
  );
}

export default TodayButton;
