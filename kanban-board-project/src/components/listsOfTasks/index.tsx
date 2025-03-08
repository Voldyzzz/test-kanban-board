import React from "react";
import ToDo from "./ToDo";
import InProgress from "./InProgress";
import Done from "./Done";
import "./index.scss";

const ListOfIssues = () => {
  return (
    <div className="listOfIssues__wrapper">
      <ToDo />
      <InProgress />
      <Done />
    </div>
  );
};

export default ListOfIssues;
