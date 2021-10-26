import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  image: {
    display: "flex",
    alignItems: "center",
    height: "300px",
    width: "165px",
    margin: "auto",
  },
  title: {
    height: "40px",
    boxShadow: "none",
  },
  price: {
    paddingTop: "15px",
  },
  bottom: {},
});

export default useStyles;
