import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../api/api";
import MenuItem from "@mui/material/MenuItem";

export default function AddToCartFood(props) {
  const subMenu = props.data.submenu;

  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const submit = async () => {
    await addToCart(dispatch, props.data, quantity);
  };
  const onChange = (e) => {
    setQuantity(e.target.value);
  };

  const [addOn, setAddOn] = React.useState("");

  const handleChange = (event) => {
    setAddOn(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h2>Add {props.title}</h2>
        <TextField
          onChange={onChange}
          value={quantity}
          id="outlined-number"
          label="Quantity"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-select"
          select
          label="Select"
          value={addOn}
          onChange={handleChange}
          helperText="Add-ons"
        >
          {subMenu.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Button
          onClick={() => {
            submit();
          }}
        >
          Add
        </Button>
      </div>
    </Box>
  );
}
