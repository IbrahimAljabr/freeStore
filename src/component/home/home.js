import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Grid";
import CategoryList from "../categoryList/categoryList";
import Carousel from "../carousel/carousel";

export default function SimpleContainer() {
  return (
    <Container>
      <Grid>
        <Carousel />
      </Grid>
      <Box>
        <Grid container>
          <CategoryList />
        </Grid>
      </Box>
    </Container>
  );
}
