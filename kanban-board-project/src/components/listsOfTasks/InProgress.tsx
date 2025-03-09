import Issue from "./Issue";
import { useSelector } from "react-redux";
import { RootState } from "../../store/state";
import { RepoData } from "../../types/types";
type Props = {};

const InProgress = (props: Props) => {
  const inProgressIssues: RepoData[] = useSelector(
    (state: RootState) => state.ListOfIssuesSlice.inProgress
  );
  return (
    <div className="listOfIssues__wrapper__block">
      <span className="titleOfList">In Progress</span>
      <ul className="listOfIssues">
        {inProgressIssues &&
          inProgressIssues.map((item) => (
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

export default InProgress;
