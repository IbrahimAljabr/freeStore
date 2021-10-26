import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Product from "./product/product";
import useStyles from "./styles";
import img1 from "../../assets/categoryImages/catEle.jpg";
import Loading from "../loading/loading";
import { useSelector, useDispatch } from "react-redux";

const imgs = [img1, img1, img1, img1, img1, img1];

export default function Products() {
  const category = useSelector((state) => state);
  const [data, setData] = useState("");
  const classes = useStyles();

  const fetchData = () => {
    fetch(`https://fakestoreapi.com/products/category/${category.Reducers.category}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        localStorage.setItem("products", JSON.stringify(json));
      });
  };

  useEffect(() => {
    if (!data) {
      setData(JSON.parse(localStorage.getItem("products")));
    }
    fetchData();
  }, []);

  if (data) {
    return (
      <main className={classes.container}>
        <Container>
          <Box className={classes.box}>
            <Grid container justify='center' spacing={3}>
              {data.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Product data={data[index]} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </main>
    );
  } else {
    return (
      <Container className={classes.container}>
        <Grid container>
          <Grid container justify='center' spacing={5}>
            {imgs.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Loading />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    );
  }
}
