import { createSlice } from "@reduxjs/toolkit";

const searchParams = Object.fromEntries(
  new URLSearchParams(window.location.search)
);

const initialState = {
  search: searchParams.search || ""
};

const searchingSlice = createSlice({
  name: "searching",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    }
  }
});

export const { setSearch } = searchingSlice.actions;

export default searchingSlice.reducer;
