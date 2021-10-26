import React from "react";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import useStyles from "./style";

function HostProfileViewingAsVolunteer() {
  const classes = useStyles();

  return <SkeletonChildrenDemo loading />;
}

function SkeletonChildrenDemo(props) {
  const { loading = false } = props;
  const classes = useStyles();

  return (
    <div>
      {loading ? (
        <>
          <Skeleton variant='rect' width='100%'>
            <div className={classes.top} />
          </Skeleton>
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width='60%' />
          </Box>
        </>
      ) : (
        null()
      )}
    </div>
  );
}

export default HostProfileViewingAsVolunteer;
