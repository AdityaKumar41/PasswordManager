import { configureStore } from "@reduxjs/toolkit";
import webSlice from "./Website";

const store = configureStore({
  reducer: {
    website: webSlice,
  },
});

export default store;
