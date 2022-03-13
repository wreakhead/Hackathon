import React from "react";
import Paper from "@mui/material/Paper";
import PageBanner from "../components/PageBanner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../api/api";
import ItemList from "../components/ItemList";

export default function ConsumablesPage() {
  const dispatch = useDispatch();
  const getData = async () => {
    await fetchData(dispatch);
  };

  useEffect(() => {
    getData();
  }, []);

  const consumableData = useSelector(
    (state) => state.data.categories.Consumables
  );
  const dataFetchDone = useSelector((state) => state.data.success);

  return dataFetchDone ? (
    <Paper elevation={0}>
      <PageBanner image={consumableData.bannerImage} alt="Consumables Banner" />
      <ItemList category="Consumables" />
    </Paper>
  ) : (
    <></>
  );
}
