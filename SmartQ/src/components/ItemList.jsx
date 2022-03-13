import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
export default function ItemList(props) {
  const [data, setData] = useState(null);
  const foodData = useSelector((state) => state.data.menu);
  const dataFetchDone = useSelector((state) => state.data.success);
  

  const filter = () => {
    return foodData.filter((item) => item.category === props.category);
  };

  useEffect(() => {
    setData(filter());
  }, [props]);

  const [spacing, setSpacing] = React.useState(2);

  return data ? (
    <Paper elevation={0} sx={{ marginTop: "10px", marginBottom: "20px" }}>
      <Grid sx={{ flexGrow: 1 }} container spacing={1}>
        <Grid item xs={12}>
         
          <Grid container justifyContent="center" spacing={spacing}>
            {data.map((prod, i) => {
              return (
                <Grid key={i} item>
                  <ItemCard
                    data={prod}
                    image={prod.imageurl}
                    title={prod.foodname}
                    detail={prod.fooddescription}
                    category={prod.category}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  ) : (
    <></>
  );
}
