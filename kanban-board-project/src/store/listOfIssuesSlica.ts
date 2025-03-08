import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListOfIssuesState {
  toDo: [];
  inProgress: [];
  done: [];
}

const initialState: ListOfIssuesState = {
  toDo: [],
  inProgress: [],
  done: [],
};

const ListOfIssuesSlice = createSlice({
  name: "ListOfIssues",
  initialState,
  reducers: {
    // addInTodoList: (
    //     state, action:
    // )
  },
});
