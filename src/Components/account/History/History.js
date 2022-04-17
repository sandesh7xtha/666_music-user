import React, { useState } from "react";
import * as h from "./History.css";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import HistoryProduct from "./HistoryProduct";

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
              <p>date:{item.date}</p>
              {/* <p>Product name:{item.title}</p> */}
              <div>
                <p>{item.fullName}</p>
                <p>{item.address}</p>
                <p>{item.contactNumber}</p>
                <p>{item.city}</p>
                <p>{item.province}</p>
                <p>{item.zip}</p>
              </div>
              <HistoryProduct payment_id={item.payment_id} />

              <p>total amount:{item.totalAmount}</p>
            </h.historyDataDiv>
          ))}
        </h.historyMainDiv>
      </h.div>
    </h.root>
  );
};
