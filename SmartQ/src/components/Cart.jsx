import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useSelector } from "react-redux";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CheckOut from "./CheckOut";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

export default function Cart() {
  const cartData = useSelector((state) => state.cart.items);

  const [checkOut, setCheckOut] = useState(false);

  return (
    <>
      {checkOut ? (
        <CheckOut />
      ) : (
        <List sx={style} component="nav" aria-label="mailbox folders">
          {cartData?.map((item, i) => {
            return (
              <ListItem key={i} divider>
                <ListItemAvatar>
                  <Avatar sx={{ width: 70, height: 70, m: 2 }}>
                    
                    <img src={item.item.imageurl} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.item.foodname}
                  secondary={`Quantity : ${
                    item.quantity
                  }, Total :$ ${parseFloat(
                    item.quantity * item.item.price
                  ).toFixed(2)}`}
                />
              </ListItem>
            );
          })}
          <ListItem sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" onClick={() => setCheckOut(true)}>
              checkout
            </Button>
          </ListItem>
        </List>
      )}
    </>
  );
}
