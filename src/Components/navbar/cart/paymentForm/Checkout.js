import { Button } from "@mui/material";
import React, { useState } from "react";
import * as c from "../paymentForm/checkout.css";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import Khalti from "../Khalti/Khalti";

const Checkout = (props) => {
  const [AddressData, setAddressData] = useState({
    fullName: "",
    address: "",
    contactNumber: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  // const [PaymentData, setPaymentData] = useState({
  //   cardName:"",
  //   cardNumber: "",
  //   expDate: "",
  //   cvv: "",
  //   city: "",
  //   state: "",
  //   zip: "",
  //   country: "",
  // });
  // console.log(AddressData);
  const alart = () => {
    alert("fill every infromation");
  };
  let buttonStyles = {
    backgroundColor: "#4f3d4f",
    padding: "10px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    border: "1px solid white",
  };

  return (
    <c.root>
      <AddressForm setAddressData={setAddressData} />
      {/* <PaymentForm setPaymentData={setPaymentData} /> */}
      {/* <Review /> */}
      {/* <Button>pay</Button> */}

      {AddressData.fullName &&
      AddressData.address &&
      AddressData.city &&
      AddressData.contactNumber &&
      AddressData.zip &&
      AddressData.state ? (
        <>
          <br />

          <Khalti
            AddressData={AddressData}
            cartData={props.cartData}
            totalAmount={props.totalAmount}
          />
        </>
      ) : (
        <>
          <br />

          <button onClick={alart} style={buttonStyles}>
            Pay Via Khalti
          </button>
        </>
      )}
    </c.root>
  );
};

export default Checkout;
