import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [
      {
        item: {
          category: "Pizza",
          fooddescription:
            "Herbed Chicken, Schezwan Chicken Meatball, Chicken Tikka.",
          foodid: "eventscafe:0",
          foodname: "Chicken Supreme Pizza",
          imageurl:
            "https://storage.googleapis.com/smartqprdnz_pub/im/fi/compassevents/CS.jpg",
          price: 14,
          sessionlist: ["BREAKFAST", "LUNCH", "SNACKS", "DINNER"],
          submenu: ["Onion", "Pepperoni", "Sausage"],
        },
        quantity: "23",
      },
    ],
    success: false,
    pending: false,
    error: false,
    errorMessage: "",
  },
  reducers: {
    getCart_Start: (state) => {
      state.pending = true;
    },
    getCart_Sucess: (state, action) => {
      state.pending = false;
      state.items.push(action.payload);
      state.success = true;
    },
    getCart_Error: (state, error) => {
      state.error = true;
      state.pending = false;
      state.errorMessage = error;
    },
  },
});

export const { getCart_Start, getCart_Sucess, getCart_Error } =
  cartSlice.actions;
export default cartSlice.reducer;
