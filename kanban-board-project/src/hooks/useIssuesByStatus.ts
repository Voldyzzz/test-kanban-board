import { useSelector } from "react-redux";
import { RootState } from "../store/state";
import { ListStatus, RepoData } from "../types/types";

export const useIssuesByStatus = (list: ListStatus): RepoData[] => {
  const issues = useSelector((state: RootState) => state.ListOfIssuesSlice);

  switch (list.id) {
    case "open":
      return issues.toDo;
    case "inProgress":
      return issues.inProgress;
    case "done":
      return issues.done;
    default:
      return [];
  }
};
