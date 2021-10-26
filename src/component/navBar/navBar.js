import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  return (
    <Toolbar className={classes.items}>
      <Typography
        component={Link}
        to='/'
        color='text.secondary'
        className={classes.logo}
        variant='h4'
      >
        24 ONLINE
      </Typography>
      <Box>
        <Box></Box>
        {/* <Box>
          <IconButton size='large' aria-label='show 17 new notifications'>
            <Badge badgeContent={1} color='error'>
              <ShoppingBagOutlinedIcon />
            </Badge>
          </IconButton>
        </Box> */}
      </Box>
    </Toolbar>
  );
}
