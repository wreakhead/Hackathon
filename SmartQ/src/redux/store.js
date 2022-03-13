import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
  },
});
