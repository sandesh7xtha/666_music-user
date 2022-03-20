import React, { useState, useCallback, useEffect } from "react";
import {
  makeStyles,
  Button,
  Typography,
  Grid,
  Slider
} from "@material-ui/core";
// import Cropper from "react-cropper";
// import "cropperjs/dist/cropper.css";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./canvasUtils";
import ImgDialog from "./ImgDialog";
import { styles } from "./styles.js";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import fs from "fs";
import blobUtil from 'blob-util'

function UploadOne({ classes }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
      // const myImage = new Image()
      // myImage.src = croppedImage;
      // setNewImage(document.body.appendChild(myImage))

      // console.log(newImage)
      // const img = croppedImage;
      // const data = img.replace(/^data:image\/\w+;base64,/, "");
      // const buf =  new Buffer(data, 'base64');
      // const image = new Image()
      // image.src = fs.writeFile('image.png', buf);
      // console.log(image)

      // console.log(buf)
      // console.log("the new Image", {newImage})
      // setCroppedImage(fs.writeFile('image.png', buf));
      // console.log(croppedImage)
      setProductImage(croppedImage);
      // window.localStorage.setItem("croppedImage", JSON.stringify(croppedImage));
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels]);

  // const objectURL = URL.createObjectURL(croppedImage);

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);

      setImageSrc(imageDataUrl);
    }
  };
  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  const onCanel = () => {
    setImageSrc(null);
  };

 

  const capture = useCallback(async () => {
    const imageSource = croppedImage;
    const blob = await fetch(imageSource).then((res) => res.blob());
const file = new File([blob], "my_image.png",{type:"image/png", lastModified:new Date()})
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post("http://localhost:3001/upload/try", formData, {
        headers: {
          "content-type": "multipart/form-data"
        },
        mode: "no-cors"
      })
      .then((res) => {
        console.log(res.data);

        setCroppedImage(res.data)


      });
// const blobToImage = (newImage)=> {
// return new Promise(resolve=> {
// const url = URL.createObjectURL(newImage)
// let img = new Image()
// img.onload = ()=> {
// URL.revokeObjectURL(url)
// resolve(img)
// }
// img.src = url
// console.log(img.src)

// })
// }
// blobToImage()
  }, [croppedImage]);
  
  
const tryalcapture = useCallback(async ()=> {
  const imageSource = croppedImage;
  const blob = await fetch(imageSource).then((res) => res.blob());
const formData = new FormData();
formData.append("image", blob);
axios
.post("http://localhost:3001/upload/try", formData, {
  headers: {
    "content-type": "multipart/form-data"
  },
  mode: "no-cors"
})
.then((res) => {
  console.log(res);
});
}, [croppedImage])

  function AddingCart() {
    return (
      <>
        <Grid item xs={6}>
          <Typography style={{ color: "black" }} variant="h5" gutterBottom>
            Iphone 11 pro Case
          </Typography>
          <Typography style={{ color: "black" }} variant="h6" gutterBottom>
            Price: 350 ETB
          </Typography>
          <Button
            onClick={capture}
            // onClick={addToBasketHandler}
            style={{ background: "#FFCC33", width: "100%", padding: "15px" }}
          >
            Add to Cart{" "}
          </Button>
        </Grid>
      </>
    );
  }
  return (
    <div>
      {imageSrc ? (
        <>
          <div className={classes.cropContainer}>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              restrictPosition={false}
              showGrid={false}
              aspect={9 / 18.5}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <div className={classes.loginContainer}>
            <input
              className={classes.inputContainer}
              type="text"
              placeholder="ስም / Your Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={classes.inputContainer}
              type="text"
              placeholder="ስም / Your Name"
              value={price}
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className={classes.controls}>
            <div className={classes.sliderContainer}>
              <Typography
                variant="overline"
                classes={{ root: classes.sliderLabel }}
              >
                Zoom
              </Typography>
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                classes={{ container: classes.slider }}
                onChange={(e, zoom) => setZoom(zoom)}
              />
            </div>

            <Button
              onClick={onCanel}
              variant="contained"
              color="primary"
              classes={{ root: classes.cropButton }}
            >
              Cancel
            </Button>
            <Button
              onClick={showCroppedImage}
              variant="contained"
              color="primary"
              classes={{ root: classes.cropButton }}
            >
              Crop
            </Button>
          </div>

          <ImgDialog
            AddingCart={AddingCart}
            img={croppedImage}
            onClose={onClose}
          />
        </>
      ) : (
        <center>
          <h1> Upload your Image</h1>
          <label>
            <img src="https://i.imgur.com/nhJ3Fw0.png" alt="upload" />
            <input
              className={classes.sorce}
              type="file"
              onChange={onFileChange}
              accept="image/*"
            />
          </label>
        </center>
      )}
    </div>
  );
}
function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}
export default withStyles(styles)(UploadOne);
