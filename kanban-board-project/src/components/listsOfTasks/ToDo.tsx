import React from "react";
import Issue from "./Issue";
type Props = {};

const ToDo = (props: Props) => {
  return (
    <div className="listOfIssues__wrapper__block">
      <span className="titleOfList">ToDo</span>
      <ul className="listOfIssues">
        <Issue />
        <Issue />
        <Issue />
      </ul>
    </div>
  );
};

export default ToDo;
