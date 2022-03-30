import React, { useState, useRef } from "react";
import * as p from "./EditSecondhandPopUp.css";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import TextField from "@mui/material/TextField";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import EditIcon from "@mui/icons-material/Edit";

import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

import Alert from "../../../material/alertCOMP/alert";

import IMGcroper from "../../../material/cropIMG/IMGcropper";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel } from "@mui/material";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const pid = props.data.shp_id;
  const customAlert = useRef();

  const formik = useFormik({
    initialValues: {
      title: props.data.title,
      description: props.data.description,
      category: props.data.category,
      price: props.data.price,
      usedDuration: props.data.used_duration,
      contactNumber: props.data.contact_number,
      email: props.data.email,
      location: props.data.location,
    },
    validationSchema: Yup.object({
      title: Yup.string().min(5, "Must be 5 characters").required("Required"),
      description: Yup.string()
        .min(20, "Must be 20 characters")
        .required("Required"),
      category: Yup.string().required("Required"),
      price: Yup.string()
        .matches(/^[0-9\b]+$/, "number only")
        .required("Required"),
      usedDuration: Yup.string().required("Required"),
      contactNumber: Yup.string()
        .min(10, "Phone number is not valids")
        .max(13, "Phone number is not valids")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone number is not valid"
        )
        .required("Required"),
      email: Yup.string().email("Invalid Email Format"),
      location: Yup.string().required("Location is required"),
    }),

    onSubmit: (values) => {
      console.log("hello");
      sendToDatabase(values);
    },
  });

  const sendToDatabase = (values) => {
    // if (pic != null) {
    // var formData = new FormData();
    // formData.append("title", values.title);
    // formData.append("description", values.description);
    // formData.append("category", values.category);
    // formData.append("price", values.price);
    // formData.append("used_duration", values.usedDuration);

    // formData.append("contact_number", values.contactNumber);
    // formData.append("email", values.email);
    // formData.append("location", values.location);
    // formData.append("user_id", id);

    const data = {
      title: values.title,
      description: values.description,
      category: values.category,
      price: values.price,
      used_duration: values.usedDuration,
      contact_number: values.contactNumber,
      email: values.email,
      location: values.location,
      user_id: id,
      shp_id: pid,
    };

    axios
      .patch("http://localhost:4000/secondProduct/", data, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log("Data inserted");
        console.log(res);
        customAlert.current.success("Product Successfully Edited");
        // setCheckImage("");
        // formik.resetForm();
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
    // } else {
    //   setCheckImage("image required");
    //   customAlert.current.error("Image required");
    // }
  };

  return (
    <div>
      <EditIcon onClick={handleClickOpen} />

      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Secondhand Product
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p.addSellForm>
              <p
                style={{
                  color: "#a8a8a8",
                }}
              >
                Edit secondhand Detail
              </p>
              <p.part>
                <p>Title</p>
                {formik.touched.title && formik.errors.title ? (
                  <TextField
                    id="title"
                    className="title"
                    variant="outlined"
                    error
                    size="small"
                    label={formik.errors.title}
                    {...formik.getFieldProps("title")}
                  />
                ) : (
                  <TextField
                    id="title"
                    className="title"
                    label="Title"
                    variant="outlined"
                    size="small"
                    {...formik.getFieldProps("title")}
                  />
                )}
              </p.part>

              {/* <p.part>
            <p>Image</p>{" "}
            <input
              onChange={fileSelectedHandler}
              multiple
              type="file"
              required
              style={{ marginLeft: "-5.5rem" }}
            />{" "}
            <span style={{ color: "red" }}> {checkImage}</span>
          </p.part> */}

              {/* <p.part>
            <p>Image</p>
            <div className="cropperDiv">
              <IMGcroper setPic={setPic} />
              <span style={{ color: "red" }}> {checkImage}</span>
            </div>
          </p.part> */}

              <p.part>
                <p>Description</p>
                <div style={{ width: "13.9rem" }}>
                  {formik.touched.description && formik.errors.description ? (
                    <TextField
                      id="description"
                      className="Description"
                      multiline
                      rows={5}
                      variant="outlined"
                      error
                      fullWidth
                      label={formik.errors.description}
                      {...formik.getFieldProps("description")}
                    />
                  ) : (
                    <TextField
                      id="description"
                      className="Description"
                      label="Description"
                      multiline
                      rows={5}
                      variant="outlined"
                      fullWidth
                      {...formik.getFieldProps("description")}
                    />
                  )}
                </div>
              </p.part>
              {/* <br/> */}
              <p.part style={{ marginTop: "1rem" }}>
                <p>Category</p>
                <div style={{ width: "13.9rem" }}>
                  <FormControl fullWidth>
                    {formik.touched.category && formik.errors.category ? (
                      <>
                        <InputLabel
                          id="demo-simple-select-label"
                          style={{ color: "#D32F2F" }}
                        >
                          Required
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          error
                          size="small"
                          className="category"
                          label={formik.errors.category}
                          {...formik.getFieldProps("category")}
                        >
                          <MenuItem
                            value=""
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <em>None</em>
                          </MenuItem>
                          <MenuItem
                            value="Drum"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Drum
                          </MenuItem>
                          <MenuItem
                            value="Guitar"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Guitar
                          </MenuItem>
                          <MenuItem
                            value="Bass"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            {" "}
                            Bass
                          </MenuItem>
                          <MenuItem
                            value="Keyboard"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Keyboard
                          </MenuItem>
                          <MenuItem
                            value="Microphone"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Microphone
                          </MenuItem>
                          <MenuItem
                            value="Accessories"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Accessories
                          </MenuItem>
                        </Select>
                      </>
                    ) : (
                      <>
                        <InputLabel id="demo-simple-select-label">
                          Select
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-selecl"
                          className="category"
                          label="Category"
                          size="small"
                          {...formik.getFieldProps("category")}
                        >
                          <MenuItem
                            value=""
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <em>None</em>
                          </MenuItem>
                          <MenuItem
                            value="Drum"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Drum
                          </MenuItem>
                          <MenuItem
                            value="Guitar"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Guitar
                          </MenuItem>
                          <MenuItem
                            value="Bass"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Bass
                          </MenuItem>
                          <MenuItem
                            value="Keyboard"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Keyboard
                          </MenuItem>
                          <MenuItem
                            value="Microphone"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Microphone
                          </MenuItem>
                          <MenuItem
                            value="Accessories"
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            Accessories
                          </MenuItem>
                        </Select>
                      </>
                    )}
                  </FormControl>
                </div>
              </p.part>

              <p.part>
                <p>Price</p>
                {formik.touched.price && formik.errors.price ? (
                  <TextField
                    id="price"
                    className="Price"
                    variant="outlined"
                    error
                    size="small"
                    label={formik.errors.price}
                    {...formik.getFieldProps("price")}
                  />
                ) : (
                  <TextField
                    id="price"
                    className="Price"
                    label="(Rs) Price"
                    size="small"
                    variant="outlined"
                    {...formik.getFieldProps("price")}
                  />
                )}
              </p.part>
              <p.part>
                <p>Used Duration</p>
                {formik.touched.usedDuration && formik.errors.usedDuration ? (
                  <TextField
                    id="usedDuration"
                    className="UsedDuration"
                    variant="outlined"
                    error
                    size="small"
                    label={formik.errors.usedDuration}
                    {...formik.getFieldProps("usedDuration")}
                  />
                ) : (
                  <TextField
                    id="usedDuration"
                    className="UsedDuration"
                    label="Used Duration"
                    variant="outlined"
                    size="small"
                    {...formik.getFieldProps("usedDuration")}
                  />
                )}
              </p.part>
              <p.part>
                <p>Contact Number</p>
                {formik.touched.contactNumber && formik.errors.contactNumber ? (
                  <TextField
                    id="contactNumber"
                    className="contactNumber"
                    variant="outlined"
                    size="small"
                    error
                    label={formik.errors.contactNumber}
                    {...formik.getFieldProps("contactNumber")}
                  />
                ) : (
                  <TextField
                    id="contactNumber"
                    className="contactNumber"
                    label="Contact Number"
                    size="small"
                    variant="outlined"
                    {...formik.getFieldProps("contactNumber")}
                  />
                )}
              </p.part>
              <p.part>
                <p>Email</p>
                {formik.touched.email && formik.errors.email ? (
                  <TextField
                    id="email"
                    className="Email"
                    variant="outlined"
                    size="small"
                    error
                    label={formik.errors.email}
                    {...formik.getFieldProps("email")}
                  />
                ) : (
                  <TextField
                    id="email"
                    className="Email"
                    size="small"
                    label="Email"
                    variant="outlined"
                    {...formik.getFieldProps("email")}
                  />
                )}
              </p.part>
              <p.part>
                <p>Location</p>
                {formik.touched.location && formik.errors.location ? (
                  <TextField
                    id="location"
                    className="location"
                    variant="outlined"
                    size="small"
                    error
                    label={formik.errors.location}
                    {...formik.getFieldProps("location")}
                  />
                ) : (
                  <TextField
                    id="location"
                    className="location"
                    label="location"
                    size="small"
                    variant="outlined"
                    {...formik.getFieldProps("location")}
                  />
                )}
              </p.part>

              <Alert ref={customAlert} />
            </p.addSellForm>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={formik.handleSubmit}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
