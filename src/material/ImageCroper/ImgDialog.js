import { makeStyles, Grid } from "@material-ui/core";
import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    alignItems: "center"
  },
  appBar: {
    position: "relative",
    backgroundColor: "#FFFFFF"
  },
  mock: {
    position: "absolute",
    maxHeight: "460px",
    maxWidth: "100%",
    zIndex: 1,
    objectFit: "contain"
  },
  cropped: {
    position: "absolute",
    objectFit: "contain",
    // zIndex: "-1",
    maxWidth: "100%",
    width: 250,
    height: 406
  },
  pImage: {
    width: "100px",
    padding: "10px"
  },
  headerLogo: {
    width: "120px",
    objectFit: "contain",
    margin: "0, 20px",
    marginTop: "18px"
  }
}));

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function ImgDialog({ img, onClose, AddingCart }) {
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const handleClose = () => {
    setOpen({ open: false });
  };
  return (
    <Dialog
      fullScreen
      open={!!img}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Link to="/">
            <img
              className={classes.headerLogo}
              src="https://i.imgur.com/r9gZrUe.jpg"
            />
          </Link>
          <IconButton color="black" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="title" color="black" className={classes.flex}>
            Your Case Reasult
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid container spacing={1} item xs={12} sm={6}>
          {/* <div className={classes.root}> */}
          <AddingCart style={{ justifyContent: "space-evenly" }} />
          {/* </div> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            className={classes.mock}
            src="https://i.imgur.com/IFOA6jF.png"
            alt="mock"
          />
          <img className={classes.cropped} src={img} alt="imager" />
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default ImgDialog;
