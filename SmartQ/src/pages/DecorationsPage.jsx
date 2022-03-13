import React from "react";
import Paper from "@mui/material/Paper";
import PageBanner from "../components/PageBanner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../api/api";
import ItemList from "../components/ItemList";

export default function DecorationsPage() {
  const dispatch = useDispatch();
  const getData = async () => {
    await fetchData(dispatch);
  };

  useEffect(() => {
    getData();
  }, []);

  const decorData = useSelector((state) => state.data.categories.Decorations);
  const dataFetchDone = useSelector((state) => state.data.success);

  return dataFetchDone ? (
    <Paper elevation={0}>
      <PageBanner image={decorData.bannerImage} alt="Decorations Banner" />
      <ItemList category="Decorations" />
    </Paper>
  ) : (
    <></>
  );
}
