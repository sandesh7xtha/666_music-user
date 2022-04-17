import { orange } from "@material-ui/core/colors";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
    <div>
      {" "}
      {HistoryInfo.map((item, index) => (
        <div style={{ background: "orange" }}>
          <p>Product name:{item.title}</p>
          <p>product amount:{item.price}</p>
        </div>
      ))}
    </div>
  );
};
export default HistoryProduct;
