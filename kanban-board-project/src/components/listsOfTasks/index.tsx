import ToDo from "./ToDo";
import InProgress from "./InProgress";
import Done from "./Done";
import "./index.scss";
import { useState } from "react";
import { getLocalStorage } from "../../services/localStorage";
import { RootState } from "../../store/state";
import { useSelector } from "react-redux";

const ListOfIssues = () => {
  const idOfRepository = useSelector(
    (state: RootState) => state.DataRepoSlice.id
  );
  const storageRepo: any = getLocalStorage(`repo_${idOfRepository}`);
  const [issues, setIssues] = useState(storageRepo.issues);

  return (
    <div className="listOfIssues__wrapper">
      <ToDo />
      <InProgress />
      <Done />
    </div>
  );
};

export default ListOfIssues;
