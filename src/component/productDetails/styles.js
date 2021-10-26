import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  box: {
    padding: "120px 0 ",
    display: "flex",
  },
  image: {
    display: "flex",
    alignItems: "center",
    height: "550px",
    width: "420px",
    margin: "auto",
  },
  text: {
    paddingTop: "30px",
  },
  typo: {
    padding: "15px 0",
  },
  button: {
    width: "100%",
    padding: "10px 0",
    border: "1px solid gray",
    borderRadius: "3px",
    background: "#222222",
    color: "#FFFFFF",
    fontSize: "1.2rem",
    margin: "25px 0 ",
  },
  rating: {
    display: "flex",
    marginBottom: "25px",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80px",
    width: "800px",
    marginTop: "100px",
  },
  loadingImage: {
    height: "60vh",
  },
  loadingText: {
    marginTop: "50px",
  },
});

export default useStyles;
