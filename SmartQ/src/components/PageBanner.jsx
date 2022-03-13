import { Paper } from "@mui/material";
import React from "react";

export default function PageBanner(props) {
  return (
    <Paper elevation={0} >
      <img src={props.image} alt={props.alt} width="100%"  />
    </Paper>
  );
}
