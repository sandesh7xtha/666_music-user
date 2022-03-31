import React, { useState } from "react";
import * as c from "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";

// import StripeCheckout from "react-stripe-checkout";
// import Checkout from "../cart/checkOut/Checkout";
import Checkout from "../cart/paymentForm/Checkout";
import { Button } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Cart = () => {
  const [cart, setCart] = useState([]);
  const id = localStorage.getItem("id");
  const [show, setShow] = useState(false);
  const showAddField = () => {
    setShow(!show);
  };

  var total=0;
  const getCartFroMDB = () => {
    axios
      .get("http://localhost:4000/addToCart/" + id)
      .then((res) => {
        console.log(res.data.data);
        setCart(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
  };

  useEffect(() => {
    getCartFroMDB();
  }, []);
  console.log(total);
  return (
    <c.root>
      <c.cartBox>
        <c.content>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ backgroundColor: "black", color: "white" }}>
                  <TableCell style={{ color: "white" }}>Product</TableCell>
                  <TableCell></TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    Quantity
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    Price
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => {
                  
                  total = total+(item.price*item.quantity);
                  return(
                  
                  <TableRow
                    key={item.title}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        style={{ width: "7rem", height: "100%" }}
                        src={item.image}
                      />{" "}
                    </TableCell>
                    <TableCell align="left">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          
                        }}
                      >
                        <span> {item.title}</span>
                        <span style={{marginTop:"1rem"}}>
                          {" "}
                          {item.description}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      <span >{item.quantity}</span>
                    </TableCell>
                    <TableCell align="right">
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span> Rs.{item.price}</span>
                        <span style={{marginTop:"1rem"}}>
                          Total Rs.{item.price * item.quantity}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                )})}
                 <TableCell align="right">
                Total
                    </TableCell>
                    <TableCell align="right">
              
                    </TableCell>
                    <TableCell align="right">
              
              </TableCell>
                <TableCell align="right">
                Rs{total}
                    </TableCell>
              </TableBody>
            </Table>
          </TableContainer>
        </c.content>
        <Button onClick={showAddField}>Check Out</Button>
        {show ? <Checkout /> : " "}
      </c.cartBox>
    </c.root>
  );
};
