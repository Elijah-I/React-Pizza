import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  isLoading: true,
  isFirstLoading: true
};

export const getPizzas = createAsyncThunk(
  "pizzas/getPizzas",
  async (category, sort, page, search) => {
    let params = {};

    if (search) params = { search };
    else {
      params.limit = 4;
      params.page = page || 1;

      if (category) params.category = category;
      if (sort) {
        params.sortBy = sort.key;
        params.order = sort.order;
      }
    }

    const response = await axios.get(
      "https://641d6897b556e431a8831fcb.mockapi.io/api/v1/items",
      { params: new URLSearchParams(params) }
    );

    return response.data;
  }
);

const pizzaSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPizzas.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.isFirstLoading = false;
    });
  }
});

export default pizzaSlice.reducer;
