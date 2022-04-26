import React, { useState } from "react";
import * as h from "./History.css";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import HistoryProduct from "./HistoryProduct";
import { Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const History = () => {
  const history = useHistory();

  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const id = localStorage.getItem("id");
  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history.push("/signIn");
    window.location.reload(false);
  };
  const AddSellPush = () => {
    history.push("/addsell");
  };

  const myProductPush = () => {
    history.push("/myProduct");
  };
  const HistoryPush = () => {
    history.push("/History");
  };

  const [HistoryInfo, setHistory] = useState([]);
  console.log(HistoryInfo);

  const getHistoryFroMDB = () => {
    // axios
    //   .get("http://localhost:4000/payment/history/" + id)
    //   .then((res) => {
    //     console.log(res.data.data);
    //     setHistory(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     console.log("data insert fail");
    //   });

    axios
      .get("http://localhost:4000/payment/paymentData/" + id)
      .then((res) => {
        console.log(res.data.data);
        setHistory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("data insert fail");
      });
  };
  useEffect(() => {
    getHistoryFroMDB();
  }, []);

  if (!token) {
    return <Redirect to="/signIn" />;
  }
  return (
    <h.root>
      <h.div>
        <h.NavMenu>
          <h.userName>{name}</h.userName>
          <p onClick={AddSellPush}>Add Sell</p>
          <p onClick={myProductPush}>My Product</p>
          <p onClick={HistoryPush}>History</p>

          <p onClick={logout}>Log out</p>
        </h.NavMenu>
        <h.historyMainDiv>
          <p
            style={{
              marginBottom: "3rem",
              marginTop: "-0.9rem",
              color: "#a8a8a8",
            }}
          >
            Purchased Product History
          </p>
          {HistoryInfo.map((item, index) => (
            <h.historyDataDiv>
              <p>Date: {item.date}</p>
              <div className="info">
                <div>
                  <p>Shipping Detail</p>
                  <div className="shippingAddress">
                    {/* <p>Name : {item.fullName}</p>
                    <p>Address : {item.address}</p>
                    <p>City : {item.city}</p>
                    <p>Province : {item.province}</p>
                    <p>Zip Code : {item.zip}</p> */}
                    <Table
                      sx={{ minWidth: 60 }}
                      size="small"
                      aria-label="a dense table"
                    >
                      <TableRow>
                        <TableCell align="right">Name :</TableCell>
                        <TableCell align="right">{item.fullName}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="right">Address :</TableCell>
                        <TableCell align="right">{item.address}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="right">City :</TableCell>
                        <TableCell align="right">{item.city}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="right">Province :</TableCell>
                        <TableCell align="right">{item.province}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="right">Zip Code :</TableCell>
                        <TableCell align="right">{item.zip}</TableCell>
                      </TableRow>
                    </Table>
                  </div>
                </div>
                <br />
                <HistoryProduct
                  payment_id={item.payment_id}
                  totalAmount={item.totalAmount}
                />
              </div>
            </h.historyDataDiv>
          ))}
        </h.historyMainDiv>
      </h.div>
    </h.root>
  );
};
