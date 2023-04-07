import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: []
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

      state.totalPrice = state.items.reduce(
        (price, item) => price + item.price * item.count,
        0
      );

      state.totalCount =
        state.items.reduce((count, item) => count + item.count, 0) || 0;
    }
  }
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
