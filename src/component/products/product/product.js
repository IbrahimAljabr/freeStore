import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { CardActionArea } from "@mui/material";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../../redux/actions/products";

export default function Product({ data }) {
  const [id, setId] = useState(data.id);
  const dispatch = useDispatch();

  const classes = useStyles();

  const categoryHandler = () => {
    dispatch(setProduct(data.id));
    localStorage.removeItem("productDetails");
  };

  return (
    <Card>
      <CardActionArea onClick={categoryHandler} component={Link} to={`/products/item/${id}`}>
        <div className={classes.image}>
          <CardMedia component='img' image={data.image} />
        </div>
        <CardContent className={classes.bottom}>
          <div className={classes.title}>
            <Typography variant='body2' color='text.secondary'>
              {data.title}
            </Typography>
          </div>
          <div className={classes.price}>
            <Typography variant='h6'>$ {data.price}</Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
