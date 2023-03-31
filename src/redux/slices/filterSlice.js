import { createSlice } from "@reduxjs/toolkit";
import { sortOptions } from "../../components/Sort";

const searchParams = Object.fromEntries(
  new URLSearchParams(window.location.search)
);

const initialState = {
  category: Number(searchParams.category || 0),
  sort:
    sortOptions
      .filter(
        (option) =>
          option.key === searchParams.sortBy &&
          option.order === searchParams.order
      )
      .pop() || sortOptions[0]
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    }
  }
});

export const { setCategory, setSort } = filterSlice.actions;

export default filterSlice.reducer;
