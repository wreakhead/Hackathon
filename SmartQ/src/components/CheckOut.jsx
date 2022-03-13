import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function CheckOut() {
  const payment = useSelector((state) => state.data.paymentMethods);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState();
  const [data, setData] = useState();

  const submit = async () => {
    setData({
      name: name,
      mobile: mobile,
      address: address,
      zip: zip,
    });
   
  };
  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <h2>Shipping Details</h2>
          <TextField
            onChange={onChange}
            value={name}
            id="outlined-number"
            label="Name"
            type="text"
          />
          <TextField
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
            id="outlined-number"
            label="Mobile"
            type="Number"
          />
          <TextField
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            id="outlined-number"
            label="Address"
            type="text"
          />
          <TextField
            onChange={(e) => setZip(e.target.value)}
            value={zip}
            id="outlined-number"
            label="zip"
            type="number"
          />
        </div>

        <div className="payment">
          {payment?.map((method, i) => {
            return (
              <Card key={i} sx={{ minWidth: 275, marginTop: "5px" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {method.label}
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {method.value}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <Button
          onClick={() => {
            submit();
          }}
        >
          Payment
        </Button>
      </Box>
    </>
  );
}
