import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Category from "../category/category";
import useStyles from "./styles";
import img1 from "../../assets/categoryImages/catEle.jpg";
import img2 from "../../assets/categoryImages/catJw.png";
import img3 from "../../assets/categoryImages/catMen.jpg";
import img4 from "../../assets/categoryImages/catWomen.jpg";
import Loading from "../loading/loading";
const imgs = [img1, img2, img3, img4];

export default function SimpleContainer() {
  const [data, setData] = useState("");
  const classes = useStyles();

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data) {
    return (
      <main className={classes.toolbar}>
        <Grid container justify='center' spacing={6}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Category data={imgs[index]} items={item} />
            </Grid>
          ))}
        </Grid>
      </main>
    );
  } else {
    return (
      <Grid container>
        <div className={classes.toolbar} />
        <Grid container justify='center' spacing={6}>
          {imgs.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Loading />
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  }
}
