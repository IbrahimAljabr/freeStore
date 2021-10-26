import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(0deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.60) 50%, rgba(0,0,0,0.10) 100%)",
    fontSize: "1.5rem",
    textAlign: "center",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
  },
  toolbar: {
    padding: "50px 0",
  },
});

export default useStyles;
