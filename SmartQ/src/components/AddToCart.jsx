import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../api/api";

export default function AddToCart(props) {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const submit = async () => {
    await addToCart(dispatch, props.data, quantity);
  };
  const onChange = (e) => {
    setQuantity(e.target.value);
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
