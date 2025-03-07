import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataRepoState {
  owner: string;
  repository: string;
  stargazers: number;
}

const initialState: DataRepoState = {
  owner: "",
  repository: "",
  stargazers: 0,
};

const DataRepoSlice = createSlice({
  name: "DataRepo",
  initialState,
  reducers: {
    updateData: (
      state,
      action: PayloadAction<{
        owner: string;
        repository: string;
        stargazers: number;
      }>
    ) => {
      state.owner = action.payload.owner;
      state.repository = action.payload.repository;
      state.stargazers = action.payload.stargazers;
    },
  },
});

export const { updateData } = DataRepoSlice.actions;

export default DataRepoSlice.reducer;
