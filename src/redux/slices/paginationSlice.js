import { createSlice } from "@reduxjs/toolkit";

const searchParams = Object.fromEntries(
  new URLSearchParams(window.location.search)
);

const initialState = {
  page: Number(searchParams.page || 1)
};

const paginationSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    }
  }
});

export const { setPage } = paginationSlice.actions;

export default paginationSlice.reducer;
