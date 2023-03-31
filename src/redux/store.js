import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./slices/paginationSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    pagination: paginationSlice
  }
});
