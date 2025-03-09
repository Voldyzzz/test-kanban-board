import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RepoData } from "../types/types";

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
        (issue) => issue.state === "inprogress"
      );
      state.done = action.payload.issues.filter(
        (issue) => issue.state === "done"
      );
    },
  },
});

export const { addIssues } = ListOfIssuesSlice.actions;

export default ListOfIssuesSlice.reducer;
