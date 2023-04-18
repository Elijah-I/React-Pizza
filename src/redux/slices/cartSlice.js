import { createSlice } from "@reduxjs/toolkit";

const initialItems = JSON.parse(localStorage.getItem("cart") || "[]");

const getTotalPrice = (items) => {
  return items.reduce((price, item) => price + item.price * item.count, 0);
};

const getTotalCount = (items) => {
  return items.reduce((count, item) => count + item.count, 0) || 0;
};

const initialState = {
  totalPrice: getTotalPrice(initialItems),
  totalCount: getTotalCount(initialItems),
  items: initialItems
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const data = action.payload;
      const existed = state.items.find(
        (item) =>
          item.id === data.id &&
          item.type === data.type &&
          item.size === data.size
      );

      if (existed) existed.count++;
      else state.items.push(data);

      state.totalPrice = getTotalPrice(state.items);
      state.totalCount = getTotalCount(state.items);
    },
    removeItem(state, action) {
      const data = action.payload;
      state.items = state.items.filter(
        (item) =>
          item.id !== data.id ||
          item.type !== data.type ||
          item.size !== data.size
      );

      state.totalPrice = getTotalPrice(state.items);
      state.totalCount = getTotalCount(state.items);
    },
    updateCount(state, action) {
      const data = action.payload;
      state.items = state.items.map((item) => {
        if (
          item.id === data.id &&
          item.type === data.type &&
          item.size === data.size
        ) {
          item.count += data.delta;
          if (item.count < 0) item.count = 0;
        }

        return item;
      });

      state.totalPrice = getTotalPrice(state.items);
      state.totalCount = getTotalCount(state.items);
    },
    dropItems(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    }
  }
});

export const { addItem, removeItem, updateCount, dropItems } =
  cartSlice.actions;

export default cartSlice.reducer;
