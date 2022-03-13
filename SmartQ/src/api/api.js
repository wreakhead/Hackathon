import axios from "axios";
import {
  getData_Start,
  getData_Sucess,
  getData_Error,
} from "../redux/dataSlice";

import {
  getCart_Start,
  getCart_Sucess,
  getCart_Error,
} from "../redux/cartSlice";

const baseUrl = "https://smartqdemo.firebaseio.com/events-data.json";

const dataView = (item, quantity, addon) => {
  const totalPrice = quantity * item.price;
  return {
    item: item,
    quantity: quantity,
    addon: addon ? addon : null,
    totalPrice: totalPrice,
  };
};

export const fetchData = async (dispatch) => {
  dispatch(getData_Start());
  try {
    const res = await axios.get(baseUrl);
    
    dispatch(getData_Sucess(res.data));
  } catch (err) {
    dispatch(getData_Error(err));
  }
};

export const addToCart = (dispatch, item, quantity, addon) => {
  dispatch(getCart_Start());
  try {
    const data = dataView(item, quantity, addon);

    dispatch(getCart_Sucess(data));
  } catch (err) {
    dispatch(getCart_Error(err));
  }
};
