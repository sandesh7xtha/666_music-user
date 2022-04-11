import React from "react";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";

import { useFormik } from "formik";
import * as Yup from "yup";
// import { TextField } from "@mui/material";
import {
  TextField,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

function AddressForm({ setAddressData }) {
  const validate = (values) => {
    // console.log(values.fullName);
    setAddressData({
      fullName: values.fullName,
      address: values.address,
      contactNumber: values.contactNumber,
      city: values.city,
      state: values.state,
      zip: values.zip,
      country: values.country,
    });
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      contactNumber: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "Must be 5 characters")
        .required("Required"),
      address: Yup.string().required("Required"),
      contactNumber: Yup.string().required("contact number required"),
      city: Yup.string().required("Required"),
      state: Yup.string()
        .matches(/^[0-9\b]+$/, "number only")
        .required("Required"),
      zip: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
      // email: Yup.string().email("Invalid Email Format"),
    }),
    validate,
  });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {formik.touched.fullName && formik.errors.fullName ? (
            <TextField
              required
              id="fullName"
              error
              name="fullName"
              label={formik.errors.fullName}
              fullWidth
              autoComplete="fname"
              size="small"
              {...formik.getFieldProps("fullName")}
            />
          ) : (
            <TextField
              required
              id="fullName"
              name="fullName"
              label="Full Name"
              fullWidth
              autoComplete="fname"
              size="small"
              {...formik.getFieldProps("fullName")}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          {formik.touched.address && formik.errors.address ? (
            <TextField
              required
              error
              id="address"
              name="address"
              label={formik.errors.address}
              fullWidth
              autoComplete="billing address-line1"
              size="small"
              {...formik.getFieldProps("address")}
            />
          ) : (
            <TextField
              required
              id="address"
              name="address"
              label="Address line"
              fullWidth
              autoComplete="billing address-line1"
              size="small"
              {...formik.getFieldProps("address")}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          {formik.touched.contactNumber && formik.errors.contactNumber ? (
            <TextField
              required
              error
              id="contactNumber"
              name="contactNumber"
              label={formik.errors.contactNumber}
              fullWidth
              autoComplete="billing address-line1"
              size="small"
              {...formik.getFieldProps("contactNumber")}
            />
          ) : (
            <TextField
              required
              id="contactNumber"
              name="contactNumber"
              label="Contact Number"
              fullWidth
              autoComplete="billing address-line1"
              size="small"
              {...formik.getFieldProps("contactNumber")}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          {formik.touched.city && formik.errors.city ? (
            <TextField
              required
              id="city"
              name="city"
              error
              label={formik.errors.city}
              fullWidth
              autoComplete="billing address-level2"
              size="small"
              {...formik.getFieldProps("city")}
            />
          ) : (
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="billing address-line1"
              size="small"
              {...formik.getFieldProps("city")}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          {formik.touched.state && formik.errors.state ? (
            <TextField
              id="state"
              name="state"
              error
              label={formik.errors.state}
              fullWidth
              size="small"
              {...formik.getFieldProps("state")}
            />
          ) : (
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              {...formik.getFieldProps("state")}
              size="small"
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          {formik.touched.zip && formik.errors.zip ? (
            <TextField
              required
              error
              id="zip"
              name="zip"
              label={formik.errors.zip}
              fullWidth
              size="small"
              {...formik.getFieldProps("zip")}
              autoComplete="billing postal-code"
            />
          ) : (
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
              size="small"
              {...formik.getFieldProps("zip")}
            />
          )}
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          {formik.touched.country && formik.errors.country ? (
            <TextField
              required
              error
              id="country"
              name="country"
              label={formik.errors.country}
              fullWidth
              size="small"
              autoComplete="billing country"
              {...formik.getFieldProps("country")}
            />
          ) : (
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="billing country"
              size="small"
              {...formik.getFieldProps("country")}
            />
          )}
        </Grid> */}
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;
