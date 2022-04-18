import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const HistoryProduct = (props) => {
  const [HistoryInfo, setHistory] = useState([]);
  const payment_id = props.payment_id;
  console.log(payment_id);

  const getHistoryFroMDB = () => {
    axios
      .get("http://localhost:4000/payment/history/" + payment_id)
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

  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <p>Product</p>
      <div>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Qunatiry</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {HistoryInfo.map((item) => (
                <TableRow
                  //   key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{item.title}</TableCell>

                  <TableCell align="right">
                    <p>{item.quantity}</p>
                  </TableCell>
                  <TableCell align="left">
                    <p>Rs.{item.price}</p>
                  </TableCell>
                </TableRow>
              ))}
              <TableCell align="center">Total</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">
                <p>Rs.{props.totalAmount}</p>
              </TableCell>
            </TableBody>
          </Table>
        </TableContainer>

        {/* <Grid container spacing={0}>
          <Grid item xs={4}>
            <p>Product name:</p>
          </Grid>
          <Grid item xs={8}>
            <p>{item.title}</p>
          </Grid>
          <Grid item xs={4}>
            <p>Product amount:</p>
          </Grid>
          {HistoryInfo.map((item, index) => (
            // <Grid item xs={4}>
            //   <p>{item.price}</p>
            // </Grid>
            //        <Grid item xs={4}>
            //        <p>{item.price}</p>
            //      </Grid>
            //             <Grid item xs={4}>
            //             <p>{item.price}</p>
            //           </Grid>
          ))}
        </Grid>
      </div> */}
      </div>
    </div>
  );
};
export default HistoryProduct;
