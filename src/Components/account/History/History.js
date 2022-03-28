import React from "react";
import * as h from "./History.css";
import { Redirect, useHistory } from "react-router-dom";

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
      </h.div>
    </h.root>
  );
};
