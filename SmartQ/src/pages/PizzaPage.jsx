import React from "react";
import Paper from "@mui/material/Paper";
import PageBanner from "../components/PageBanner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../api/api";
import ItemList from "../components/ItemList";

export default function PizzaPage() {
  const dispatch = useDispatch();
  const getData = async () => {
    await fetchData(dispatch);
  };

  useEffect(() => {
    getData();
  }, []);

  const foodData = useSelector((state) => state.data.categories.Pizza);
  const dataFetchDone = useSelector((state) => state.data.success);

  return dataFetchDone ? (
    <Paper elevation={0}>
      <PageBanner image={foodData.bannerImage} alt="Pizza Banner" />
      <ItemList category="Pizza"/>
    </Paper>
  ) : (
    <></>
  );
}
