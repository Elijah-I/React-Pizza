import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    { name: "All", id: 0 },
    { name: "Meat", id: 1 },
    { name: "Vegetarian", id: 2 },
    { name: "Grill", id: 3 },
    { name: "Spicy", id: 4 },
    { name: "Сalzone", id: 5 }
  ],
  sortOptions: [
    { name: "popularity ↑", key: "rating", order: "asc" },
    { name: "popularity ↓", key: "rating", order: "desc" },
    { name: "price ↑", key: "price", order: "asc" },
    { name: "price ↓", key: "price", order: "desc" },
    { name: "alphabet ↑", key: "title", order: "asc" },
    { name: "alphabet ↓", key: "title", order: "desc" }
  ]
};

const filterSlice = createSlice({
  name: "filter",
  initialState
});

export default filterSlice.reducer;
