import Issue from "./Issue";
import { useSelector } from "react-redux";
import { RootState } from "../../store/state";
import { RepoData } from "../../types/types";

type Props = {};

const ToDo = ({}: Props) => {
  const toDoIssues: RepoData[] = useSelector(
    (state: RootState) => state.ListOfIssuesSlice.toDo
  );

  return (
    <div className="listOfIssues__wrapper__block">
      <span className="titleOfList">ToDo</span>
      <ul className="listOfIssues">
        {toDoIssues &&
          toDoIssues.map((item) => (
            <Issue
              key={item.id}
              number={item.number}
              comments={item.comments}
              state={item.state}
              title={item.title}
              updated_at={item.updated_at}
              user={item.user}
            />
          ))}
      </ul>
    </div>
  );
};

export default ToDo;
