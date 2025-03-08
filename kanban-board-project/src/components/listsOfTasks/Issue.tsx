import React from "react";

type Props = {};

const Issue = (props: Props) => {
  return (
    <li className="listOfIssues__item">
      <p className="listOfIssues__item-title">Some issue title</p>
      <p className="listOfIssues__item-number-date">#777 opened 3 days ago</p>
      <div className="listOfIssues__item__info">
        <span className="listOfIssues__item__info-author">Admin |</span>
        <span className="listOfIssues__item__info-comments"> Comments: 2</span>
      </div>
    </li>
  );
};

export default Issue;
