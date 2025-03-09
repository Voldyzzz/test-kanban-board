import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataRepoState {
  id: number;
  owner: string;
  repository: string;
  stargazers: number;
}

const initialState: DataRepoState = {
  id: 0,
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
        id: number;
        owner: string;
        repository: string;
        stargazers: number;
      }>
    ) => {
      state.id = action.payload.id;
      state.owner = action.payload.owner;
      state.repository = action.payload.repository;
      state.stargazers = action.payload.stargazers;
    },
  },
});

export const { updateData } = DataRepoSlice.actions;

export default DataRepoSlice.reducer;
