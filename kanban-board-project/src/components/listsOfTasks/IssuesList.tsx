import { useDroppable } from "@dnd-kit/core";
import { ListStatus, RepoData } from "../../types/types";
import Issue from "./Issue";

type Props = {
  list: ListStatus;
  issues: RepoData[];
};

const IssuesList = ({ list, issues }: Props) => {
  const { setNodeRef } = useDroppable({
    id: list.id,
  });
  return (
    <div className="listOfIssues__wrapper__block">
      <span className="titleOfList">{list.title}</span>
      <ul ref={setNodeRef} className="listOfIssues">
        {issues.map((issue) => (
          <Issue key={issue.id} issue={issue} />
        ))}
      </ul>
    </div>
  );
};

export default IssuesList;
