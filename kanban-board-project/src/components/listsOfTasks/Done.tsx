import React from "react";
import Issue from "./Issue";

type Props = {};

const Done = (props: Props) => {
  return (
    <div className="listOfIssues__wrapper__block">
      <span className="titleOfList">Done</span>
      <ul className="listOfIssues">
        <Issue />
      </ul>
    </div>
  );
};

export default Done;
