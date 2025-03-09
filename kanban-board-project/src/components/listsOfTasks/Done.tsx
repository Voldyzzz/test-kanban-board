import { useSelector } from "react-redux";
import { RootState } from "../../store/state";
import { RepoData } from "../../types/types";
import Issue from "./Issue";

const Done = () => {
  const doneIssues: RepoData[] = useSelector(
    (state: RootState) => state.ListOfIssuesSlice.done
  );
  return (
    <div className="listOfIssues__wrapper__block">
      <span className="titleOfList">Done</span>
      <ul className="listOfIssues">
        {doneIssues &&
          doneIssues.map((item) => (
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

export default Done;
