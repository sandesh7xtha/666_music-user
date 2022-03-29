import * as React from "react";
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
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

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

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().required("Required Message"),
    }),

    onSubmit: (values) => {
      console.log("hello");
      sendToDatabase(values);
    },
  });

  const sendToDatabase = (values) => {
   
    console.log(props.productId);
    console.log(id);
    console.log(values.message);
    axios
      .post("http://localhost:4000/report/", {user_id:id, shp_id:props.productId, message:values.message }, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log("Data inserted");
        console.log(res);
        alert("Report has been submitted!!");
        formik.resetForm();
        handleClose();

      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
  };

  return (
    <div>
      <ReportGmailerrorredIcon onClick={handleClickOpen} />

      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Report
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          If you come across any other products that aren't in the mussical categories, please let us know.       <br />
            {formik.touched.message && formik.errors.message ? (
              <TextField
                id="filled-multiline-flexible"
                multiline
                maxRows={4}
                variant="filled"
                style={{ width: "34rem" }}
                error
                label={formik.errors.message}
                {...formik.getFieldProps("message")}
              />
            ) : (
              <TextField
                id="filled-multiline-flexible"
                label="Message"
                multiline
                maxRows={4}
                variant="filled"
                style={{ width: "34rem" }}
                {...formik.getFieldProps("message")}
              />
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={formik.handleSubmit} >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
