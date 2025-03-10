import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RepoData } from "../types/types";
import { getLocalStorage, setLocalStorage } from "../services/localStorage";

interface ListOfIssuesState {
  issues: RepoData[];
  toDo: RepoData[];
  inProgress: RepoData[];
  done: RepoData[];
}

const initialState: ListOfIssuesState = {
  issues: [],
  toDo: [],
  inProgress: [],
  done: [],
};

const ListOfIssuesSlice = createSlice({
  name: "ListOfIssues",
  initialState,
  reducers: {
    addIssues: (
      state,
      action: PayloadAction<{
        issues: RepoData[];
      }>
    ) => {
      state.issues = action.payload.issues;
      state.toDo = action.payload.issues.filter(
        (issue) => issue.state === "open"
      );
      state.inProgress = action.payload.issues.filter(
        (issue) => issue.state === "inProgress"
      );
      state.done = action.payload.issues.filter(
        (issue) => issue.state === "done"
      );
    },
    updateIssues: (
      state,
      action: PayloadAction<{
        issueId: number;
        newState: RepoData["state"];
        idOfRepository: number;
      }>
    ) => {
      state.issues = state.issues.map((issue) =>
        issue.id === action.payload.issueId
          ? { ...issue, state: action.payload.newState }
          : issue
      );

      state.toDo = state.issues.filter((issue) => issue.state === "open");
      state.inProgress = state.issues.filter(
        (issue) => issue.state === "inProgress"
      );
      state.done = state.issues.filter((issue) => issue.state === "done");

      const repo: {} | null = getLocalStorage(
        `repo_${action.payload.idOfRepository}`
      );

      if (repo) {
        setLocalStorage(`repo_${action.payload.idOfRepository}`, {
          ...repo,
          issues: state.issues,
        });
      }
    },
  },
});

export const { addIssues, updateIssues } = ListOfIssuesSlice.actions;

export default ListOfIssuesSlice.reducer;
