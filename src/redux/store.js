import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slices/cartSlice";
import pizzaSlice from "./slices/pizzaSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    pizzas: pizzaSlice,
    cart: cartSlice
  }
});
