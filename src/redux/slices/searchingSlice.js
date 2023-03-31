import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: ""
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
