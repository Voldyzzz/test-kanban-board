import { configureStore } from "@reduxjs/toolkit";
import DataRepoSlice from "./dataRepoSlice";
import ListOfIssuesSlice from "./listOfIssuesSlice";

const store = configureStore({
  reducer: {
    DataRepoSlice,
    ListOfIssuesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
