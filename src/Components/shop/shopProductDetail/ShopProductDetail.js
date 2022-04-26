import React, { useEffect, useState } from "react";
import * as p from "./ShopProductDetail.css";
import logo from "../../../assets/logo192.png";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { Divider, Paper } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";

export const ShopProductDetail = () => {
  const [shopProduct, setShopProduct] = useState([]);

  let { id } = useParams();
  console.log(shopProduct);
  const getShopProductFroMDB = () => {
    axios
      .get("http://localhost:4000/shopping/productDetial/" + id)
      .then((res) => {
        //   console.log(res.data.data[0]);
        setShopProduct(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
  };

  useEffect(() => {
    getShopProductFroMDB();
  }, []);

  const user_id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const loginedUserName = localStorage.getItem("name");
  const loginedUserId = localStorage.getItem("id");
  const [blooen, setBlooen] = useState(true);

  const sendToAddToCartDatabase = (values) => {
    if (!token) {
      // return <Redirect to="/signIn" />;
      // alert("login to add to Cart!");
      setBlooen(false);
    }
    axios
      .post(
        "http://localhost:4000/addToCart/",
        { user_id: user_id, sp_id: id, quantity: count },
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        console.log("Data inserted");
        console.log(res);
        alert("Product add to Cart!");
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
  };

  const [count, setCount] = useState(1);
  const IncNum = () => {
    if (count < shopProduct.stock) setCount(count + 1);
  };
  const DecNum = () => {
    if (count > 1) setCount(count - 1);
    else {
      setCount(1);
    }
  };

  const formik = useFormik({
    initialValues: {
      cmt: "",
    },
    validationSchema: Yup.object({
      cmt: Yup.string(),
    }),

    onSubmit: (values) => {
      console.log("hello");
      sendToCommentDatabase(values);
    },
  });

  const sendToCommentDatabase = (values) => {
    axios
      .post(
        "http://localhost:4000/comments/commentShop",
        {
          message: values.cmt,
          user_id: loginedUserId,
          sp_id: shopProduct.sp_id,
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
      .get("http://localhost:4000/comments/commentShop/" + id)
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

  if (blooen === false) {
    return <Redirect to="/signIn" />;
  }
  return (
    <p.root>
      <p.div>
        <p.ProductDetail>
          <p.imgDiv>
            <img src={shopProduct.image} />
          </p.imgDiv>
          <p.detail>
            <p className="title">{shopProduct.title}</p>
            <p className="price">Rs.{shopProduct.price}</p>
            <p className="discount">
              Rs.
              {shopProduct.price -
                (shopProduct.price * shopProduct.discount) / 100}
            </p>
            <div className="buttonIncDic">
              <Button onClick={IncNum}>
                <AddIcon />
              </Button>
              <p className="quantity"> {count}</p>
              <Button onClick={DecNum}>
                <RemoveIcon />
              </Button>{" "}
              <p className="stock"> {shopProduct.stock - count} Stock left</p>
            </div>

            <p.button>
              {/* <Button className="BuyNow" variant="outlined">
                BUY NOW
              </Button> */}
              <Button
                className="AddToCart"
                variant="outlined"
                onClick={() => {
                  sendToAddToCartDatabase();
                }}
              >
                ADD TO CART
              </Button>
            </p.button>
          </p.detail>
        </p.ProductDetail>
        <p.productInfo>
          <p>Product Detail</p>
          <p>{shopProduct.description}</p>
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
