import React, { useState,useCallback } from "react";
import { makeStyles } from "@material-ui/core";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import {getCroppedImg} from "./canvasUtils"

import { styles } from "./styles";

import { withStyles } from "@material-ui/core/styles";

function Upload({ classes }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();
  const [open, setOpen] = useState(false);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const onFileChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
    window.localStorage.setItem("croppedImage", JSON.stringify(cropData));
    console.log(cropData);
  };
  return (
    <div>
      {imageSrc ? (
        <>
          <div>
            <Cropper
              style={{ height: 400, width: "100%" }}
              initialAspectRatio={9 / 18.5}
              src={imageSrc}
              viewMode={1}
              guides={true}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false}
              onCropComplete={onCropComplete}
              // onInitialized={(instance) => {
              //   setCropper(instance);
              // }}
            />
            <div>
              <button onClick={getCropData}> Crop Image </button>
            </div>
           
              {/* <MockScreen Img={cropData} onClose={handleClose} /> */}
         
          </div>
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

export default withStyles(styles)(Upload);
