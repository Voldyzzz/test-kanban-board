import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RepoData } from "../types/types";
import { getLocalStorage, setLocalStorage } from "../services/localStorage";
import sortIssues from "../utility/sortIssues";

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
      state.issues = action.payload.issues.map((issue) => ({
        ...issue,
      }));

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
        newOrder?: number;
        currentOrder?: number;
        idOfRepository: number;
      }>
    ) => {
      state.issues = state.issues.map((issue) => {
        if (issue.order === action.payload.newOrder) {
          issue.order = action.payload.currentOrder
            ? action.payload.currentOrder
            : issue.order;
        }

        if (issue.id === action.payload.issueId) {
          return {
            ...issue,
            state: action.payload.newState,
            order:
              action.payload.newOrder !== undefined
                ? action.payload.newOrder
                : issue.order,
          };
        }
        return issue;
      });

      state.toDo = state.issues
        .filter((issue) => issue.state === "open")
        .sort(sortIssues);
      state.inProgress = state.issues
        .filter((issue) => issue.state === "inProgress")
        .sort(sortIssues);
      state.done = state.issues
        .filter((issue) => issue.state === "done")
        .sort(sortIssues);

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
