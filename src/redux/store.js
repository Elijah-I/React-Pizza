import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "./slices/filterSlice";
import searchingSlice from "./slices/searchingSlice";
import paginationSlice from "./slices/paginationSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    searching: searchingSlice,
    pagination: paginationSlice
  }
});
