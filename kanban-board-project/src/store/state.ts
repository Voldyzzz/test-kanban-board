import { configureStore } from "@reduxjs/toolkit";
import DataRepoSlice from "./dataRepoSlice";

const store = configureStore({
  reducer: {
    DataRepoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
