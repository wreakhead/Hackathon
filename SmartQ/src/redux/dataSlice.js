import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "Data",
  initialState: {
    categories: [],
    menu: [],
    paymentMethods: [],
    submenu: [],
    success: false,
    pending: false,
    error: false,
    errorMessage: "",
  },
  reducers: {
    getData_Start: (state) => {
      state.pending = true;
    },
    getData_Sucess: (state, action) => {
      state.pending = false;
      state.categories = action.payload.extras.categories;
      state.menu = action.payload.menu;
      state.paymentMethods = action.payload.paymentMethods;
      state.submenu = action.payload.submenu;
      state.success = true;
    },
    getData_Error: (state, error) => {
      state.error = true;
      state.pending = false;
      state.errorMessage = error;
    },
  },
});

export const { getData_Start, getData_Sucess, getData_Error } =
  dataSlice.actions;
export default dataSlice.reducer;
