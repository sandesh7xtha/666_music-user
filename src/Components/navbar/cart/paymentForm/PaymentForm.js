import React from "react";
// import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";

import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Typography, Grid } from "@mui/material";

function PaymentForm( {setPaymentData} ) {
  const validate = (values) => {
    setPaymentData({
      cardName:values.cardName,
      cardNumber: values.cardNumber,
      expDate: values.expDate,
      cvv: values.cvv,
      city: values.city,
      state: values.state,
      zip: values.zip,
      country: values.country
    });
  };

  const formik = useFormik({
    initialValues: {
      cardName:"",
      cardNumber: "",
      expDate: "",
      cvv: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
    validationSchema: Yup.object({
      cardName: Yup.string().required("Required"),
      cardNumber: Yup.string().required("Required"),
      expDate: Yup.string().required("Required"),
      cvv: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      zip: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
      // email: Yup.string().email("Invalid Email Format"),
    }),

    validate,
  });
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            size="small"
            label="Name on card"
            fullWidth
            {...formik.getFieldProps("cardName")}

          />
        </Grid>
        <Grid item xs={12} md={6}>
          {formik.touched.cardNumber && formik.errors.cardNumber ? (
            <TextField
              required
              error
              id="cardNumber"
              label={formik.errors.cardNumber}
              fullWidth
              size="small"
              {...formik.getFieldProps("cardNumber")}
            />
          ) : (
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              size="small"
              {...formik.getFieldProps("cardNumber")}
            />
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {formik.touched.expDate && formik.errors.expDate ? (
            <TextField
              required
              error
              id="expDate"
              label={formik.errors.expDate}
              fullWidth
              size="small"
              {...formik.getFieldProps("expDate")}
            />
          ) : (
            <TextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
              size="small"
              {...formik.getFieldProps("expDate")}
            />
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {formik.touched.cvv && formik.errors.cvv ? (
            <TextField
              required
              error
              id="cvv"
              label={formik.errors.cvv}
              helperText="Last three digits on signature strip"
              fullWidth
              size="small"
              {...formik.getFieldProps("cvv")}
            />
          ) : (
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              size="small"
              {...formik.getFieldProps("cvv")}
            />
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;
