import React, { useEffect, useState } from "react";
import * as p from "./SecondhandDetail.css";
import logo from "../../../assets/logo192.png";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Divider, Paper } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

export const SecondhandDetail = () => {
  const [myProduct, setMyProduct] = useState([]);

  let { id } = useParams();
  const loginedUserName = localStorage.getItem("name");
  const loginedUserId = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  // console.log(myProduct);
  const getMyProductFroMDB = () => {
    axios
      .get("http://localhost:4000/secondProduct/productDetial/" + id)
      .then((res) => {
        //   console.log(res.data.data[0]);
        setMyProduct(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
  };

  useEffect(() => {
    getMyProductFroMDB();
  }, []);

  const formik = useFormik({
    initialValues: {
      cmt: "",
    },
    validationSchema: Yup.object({
      cmt: Yup.string(),
    }),

    onSubmit: (values) => {
      console.log("hello");
      sendToDatabase(values);
    },
  });
  const sendToDatabase = (values) => {
    axios
      .post(
        "http://localhost:4000/comments/",
        {
          message: values.cmt,
          user_id: loginedUserId,
          shp_id: myProduct.shp_id,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        console.log("Data inserted");
        console.log(res);
        getCommentsFroMDB();
        formik.resetForm();
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
  };

  const [comments, setComments] = useState([]);

  const getCommentsFroMDB = () => {
    axios
      .get("http://localhost:4000/comments/" + id)
      .then((res) => {
        console.log(res.data.data);
        setComments(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
  };

  useEffect(() => {
    getCommentsFroMDB();
  }, []);

  return (
    <p.root>
      <p.div>
        <p.ProductDetail>
          <p.imgDiv>
          <img src={myProduct.image} />
          </p.imgDiv>
          <p.detail>
            <p className="title">{myProduct.title}</p>
            <p className="price">Price: Rs {myProduct.price}</p>

            <p className="usedDuration">
              Used Duration: {myProduct.used_duration}
            </p>
            <p className="contact">Contact: {myProduct.contact_number}</p>
            <p className="email">Email: {myProduct.email}</p>
            <p className="location">Location: {myProduct.location}</p>
          </p.detail>
        </p.ProductDetail>
        <p.productInfo>
          <p>Product Detail</p>
          <p>{myProduct.description}</p>
        </p.productInfo>
        <p.comment>
          <p>Comments</p>
          <div className="commmentDiv">
            {formik.touched.cmt && formik.errors.cmt ? (
              <TextField
                id="filled-textarea"
                label={"Comment as " + loginedUserName}
                placeholder="write a public comment..."
                multiline
                variant="filled"
                error
                {...formik.getFieldProps("cmt")}
              />
            ) : (
              <TextField
                id="filled-textarea"
                label={"Comment as " + loginedUserName}
                placeholder="write a public comment..."
                multiline
                variant="filled"
                {...formik.getFieldProps("cmt")}
              />
            )}
            <br />
            <Button
              style={{ marginLeft: "50rem" }}
              variant="contained"
              endIcon={<SendIcon />}
              onClick={formik.handleSubmit}
            >
              Send
            </Button>
          </div>

          <div style={{ padding: 14 }}>
            <Paper style={{ padding: "40px 20px" }}>
              <p.Grid>
                {comments.map((item, index) => (
                  <p.item>
                    <h4
                      style={{
                        marginLeft: "1rem",
                        marginTop: "-1rem",
                        textTransform: "capitalize",
                        textAlign: "left",
                      }}
                    >
                      {item.name}
                    </h4>
                    <p style={{ textAlign: "left" }}>{item.message}</p>
                    <p style={{ textAlign: "left", color: "gray" }}>
                      posted on {item.date}
                    </p>
                    <Divider variant="fullWidth" />
                  </p.item>
                ))}
              </p.Grid>
            </Paper>
          </div>
        </p.comment>
      </p.div>
    </p.root>
  );
};
