import { RepoData } from "../types/types";

const sortIssues = (a: RepoData, b: RepoData) => {
  if (a.order > b.order) {
    return 1;
  } else {
    return -1;
  }
};

export default sortIssues;
