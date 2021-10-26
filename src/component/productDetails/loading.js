import Container from "@mui/material/Container";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

export default function Product() {
  const classes = useStyles();

  return (
    <Container className={classes.loading}>
      <Grid container justify='center' spacing={2}>
        <Grid item xs={12} sm={12} md={7} lg={6}>
          <Skeleton className={classes.loadingImage} variant='rect' width='100%'></Skeleton>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={6}>
          <Box sx={{ pt: 0.5 }}>
            <Skeleton className={classes.loadingText} />
            <Skeleton width='60%' />
            <Skeleton className={classes.loadingText} />
            <Skeleton width='40%' />
            <Skeleton className={classes.loadingText} />
            <Skeleton width='60%' />
            <Skeleton className={classes.loadingText} />
            <Skeleton width='50%' />
            <Skeleton className={classes.loadingText} variant='rect' width='100%'></Skeleton>
            <Skeleton className={classes.loadingText} />
            <Skeleton width='50%' />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
