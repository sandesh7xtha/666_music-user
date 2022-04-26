import React, { useRef } from "react";
import * as si from "../Sign In/SignIn.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

import PasswordField from "material-ui-password-field";
import Alert from "../../../material/alertCOMP/alert";

const FormControl = require("@material-ui/core/FormControl").default;
const InputLabel = require("@material-ui/core/InputLabel").default;

export const SignIn = () => {
  const history = useHistory();
  const customAlert = useRef();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email Format")
        .required("Email Required !!"),
      password: Yup.string()
        .min(6, "Password must be at least 6 charaters")
        .required("Password Required !!"),
    }),

    onSubmit: (values) => {
      sendToDatabase(values);

      formik.resetForm();
    },
  });

  const sendToDatabase = (values) => {
    axios
      .post("http://localhost:4000/user/login", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log("log in successfull");
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("id", res.data.id);
        history.push("/news");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log("fail ");
        customAlert.current.error(err.response.data.message);
      });
  };

  return (
    <si.root>
      <si.signInBox>
        <si.box>
          <si.subBox>
            <p
              style={{
                fontSize: "large",
                marginLeft: "8rem",
                fontWeight: "bold",
                color: "#121212",
              }}
            >
              Sign In
            </p>

            <si.part>
              <p>Email</p>
              {formik.touched.email && formik.errors.email ? (
                <TextField
                  id="email"
                  className="email"
                  label={formik.errors.email}
                  error
                  variant="standard"
                  {...formik.getFieldProps("email")}
                />
              ) : (
                <TextField
                  id="email"
                  className="email"
                  label="Email"
                  variant="standard"
                  {...formik.getFieldProps("email")}
                />
              )}
            </si.part>

            <si.part>
              {formik.touched.password && formik.errors.password ? (
                <FormControl error>
                  <InputLabel htmlFor="name-label">
                    {" "}
                    {formik.errors.password}
                  </InputLabel>
                  <PasswordField
                    id="password"
                    className="password"
                    {...formik.getFieldProps("password")}
                  />
                </FormControl>
              ) : (
                <FormControl>
                  <InputLabel htmlFor="name-label">Password</InputLabel>
                  <PasswordField
                    id="password"
                    className="password"
                    {...formik.getFieldProps("password")}
                  />
                </FormControl>
              )}
            </si.part>
            <si.part>
              <Button
                className="signInButton"
                style={{
                  backgroundColor: "#121212",
                  color: "white",
                  borderColor: "#121212",
                }}
                variant="outlined"
                onClick={formik.handleSubmit}
              >
                Sign In
              </Button>
            </si.part>

            <si.part>
              <p
                className="info"
                style={{
                  fontSize: "smaller",
                  marginLeft: "0.5rem",
                  color: "#8797A8",
                }}
              >
                We value your privacy. Your details are safe with us.
              </p>
            </si.part>

            <si.part>
              <Link style={{ textDecoration: "none" }} to="./createNewAcount">
                <Button
                  className="signInButton"
                  style={{
                    backgroundColor: "#EEF0F3",
                    color: "black",
                    borderColor: "#EEF0F3",
                  }}
                  variant="outlined"
                >
                  Create New Account
                </Button>
              </Link>
            </si.part>
          </si.subBox>
        </si.box>{" "}
        <Alert ref={customAlert} />
      </si.signInBox>
    </si.root>
  );
};
