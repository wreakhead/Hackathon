import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../api/api";
import OptionCard from "../components/OptionCard";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function Home() {
  const dispatch = useDispatch();
  const getData = async () => {
    await fetchData(dispatch);
  };

  useEffect(() => {
    getData();
  }, []);

  const categories = useSelector((state) => state.data.categories);
  const dataFetchDone = useSelector((state) => state.data.success);
 

  const [spacing, setSpacing] = React.useState(2);

  return dataFetchDone ? (
    <Paper elevation={0}>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            <Grid item>
              <OptionCard
                to="consumables"
                title="Consumables"
                image={categories?.Consumables.icon}
              />
            </Grid>
            <Grid item>
              <OptionCard
                to="decorations"
                title="Decorations"
                image={categories?.Decorations.icon}
              />
            </Grid>
            <Grid item>
              <OptionCard
                to="food"
                title="Pizza"
                image={categories?.Pizza.icon}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  ) : (
    <></>
  );
}
