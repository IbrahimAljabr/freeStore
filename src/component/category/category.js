import Card from "@mui/material/Card";
import Box from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import useStyles from "./styles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/actions/products";

export default function Category({ data, items }) {
  const dispatch = useDispatch();

  const classes = useStyles();
  const categoryHandler = () => {
    dispatch(setCategory(items));
    localStorage.removeItem("products");
  };
  return (
    <Box>
      <Card component={Link} to='/products' onClick={categoryHandler}>
        <CardActionArea>
          <CardMedia component='img' height='330' image={data} />
          <CardContent className={classes.root}>
            <Typography variant='overline'>{items}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
