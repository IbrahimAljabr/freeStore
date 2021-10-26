import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ButtonUnstyled from "@mui/core/ButtonUnstyled";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import CardMedia from "@mui/material/CardMedia";
import useStyles from "./styles";
import Loading from "./loading";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function Product() {
  const state = useSelector((state) => state.product);
  const [product, setProduct] = useState("");
  const [id, setId] = useState(`https://fakestoreapi.com/products/${state.product}`);
  const classes = useStyles();

  const fetchData = () => {
    fetch(id)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        localStorage.setItem("productDetails", JSON.stringify(json));
      });
  };

  useEffect(() => {
    if (localStorage.getItem("productDetails")) {
      setProduct(JSON.parse(localStorage.getItem("productDetails")));
    } else fetchData();
  }, []);

  if (product) {
    return (
      <Container>
        <Box>
          <Grid className={classes.box} container justify='center' spacing={2}>
            <Grid item xs={12} sm={12} md={7} lg={6}>
              <div className={classes.image}>
                <CardMedia component='img' image={product.image} />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={6} className={classes.text}>
              <Typography className={classes.typo} variant='h6'>
                {product.title}
              </Typography>
              <div className={classes.rating}>
                <Rating precision={0.5} size='large' value={product.rating.rate} />
                <Typography variant='subtitle1' component='legend' color='primary'>
                  ({product.rating.count})
                </Typography>
              </div>
              <Typography className={classes.typo} variant='h4'>
                $ {product.price}
              </Typography>
              <ButtonUnstyled className={classes.button} variant='contained'>
                Add To Bag
              </ButtonUnstyled>
              <Typography className={classes.typo} variant='h5'>
                PRODUCT DETAILS
                <hr />
              </Typography>
              <Typography className={classes.typo} variant='body2' color='text.secondary'>
                {product.description}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  } else {
    return <Loading />;
  }
}
