import React, { useEffect, useState } from "react"
import {Button, Grid, makeStyles, Typography} from "@material-ui/core"
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
const useStyles = makeStyles((theme)=> ({
  root: {
    position: "relative",
    alignItems: "center"
  },
  mock: {
    position: "absolute",
    maxHeight: "460px",
    maxWidth: "100%",
    objectFit: "contain"
  },
  cropped: {
    position: "absolute",
    objectFit: "contain",
    zIndex: "-1",
    maxWidth: "100%",
    width: 250,
    height: 406
  },
  pImage: {
    width: "100px"
  }
}))

function MockScreen({Img, onClose}) {
const classes = useStyles()
const [cropedPixel, setCropedPixel] = useState(undefined);
useEffect(() => {
  const croppedImage = JSON.parse(
    window.localStorage.getItem("croppedImage")
    
  );
  
  setCropedPixel(croppedImage);
}, []);

const blob =window.localStorage.getItem("croppedImage")
console.log(blob)

function AddingCart() {
  return (
    <>
      <Grid item xs={6}>
        <img
          className={classes.pImage}
          src="https://i.imgur.com/uQmlwzk.jpg"
          alt="productImage"
        />
      </Grid>

      <Grid item xs={6}>
        <Typography style={{ color: "black" }} variant="h5" gutterBottom>
          Iphone 11 Pro Case
        </Typography>
        <Typography style={{ color: "black" }} variant="h6" gutterBottom>
          Price: 350 ETB
        </Typography>
        <Button
          style={{ background: "#FFCC33", width: "100%", padding: "15px" }}
        >
          Add to Cart{" "}
        </Button>
      </Grid>
    </>
  );
}
function Transition(props) {
  return <Slide direction="up" {...props} />;
}
return(
  <Dialog
  fullScreen
  open={!!Img}
  onClose={onClose}
  TransitionComponent={Transition}
>
  <AppBar className={classes.appBar}>
    <Toolbar>
      
        
      
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
          <AddingCart />
          {/* </div> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            className={classes.mock}
            src="https://i.imgur.com/IFOA6jF.png"
            alt="mock"
          />
          <img
            className={classes.cropped}
            src={Img}
            // src="https://i.imgur.com/Bm7GNfR.jpg"
            alt="background"
          />
        </Grid>
      </Grid>
    </Dialog>
)
}

export default MockScreen