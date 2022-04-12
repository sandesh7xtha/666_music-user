import React, { useState } from "react";

import KhaltiCheckout from "khalti-checkout-web";
// import config from "./KhaltiConfig";
import axios from "axios";

export default function Khalti(props) {
  const id = localStorage.getItem("id");
  console.log(id);

  let myKey = {
    publicTestKey: "test_public_key_9794b72619564e26a92d5a84644cbd4f",
    secretKey: "test_secret_key_7dc33e98c1f949b29353092ffc2e0c08",
  };

  let config = {
    // replace this key with yours
    publicKey: myKey.publicTestKey,
    productIdentity: "123766",
    productName: "My Ecommerce Store",
    productUrl: "http://localhost:3000",
    eventHandler: {
      onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log(payload);
        let data = {
          token: payload.token,
          amount: payload.amount,
        };

        axios
          .get(
            `https://meslaforum.herokuapp.com/khalti/${data.token}/${data.amount}/${myKey.secretKey}`
          )
          .then((response) => {
            console.log(response.data);
            let paymentData = {
              fullName: props.AddressData.fullName,
              address: props.AddressData.address,
              contactNumber: props.AddressData.contactNumber,
              city: props.AddressData.city,
              province: props.AddressData.state,
              zip: props.AddressData.zip,

              // cartData: props.cartData,
              totalAmount: props.totalAmount,
              name: response.data.data.user.name,
              successAmount: response.data.data.amount,
              paymentType: response.data.data.type.name,
              payment_id: response.data.data.idx,
              user_id: id,
            };
            console.log(paymentData);

            alert("Thank you for generosity");
            axios
              .post("http://localhost:4000/payment/", paymentData)
              .then((res) => {
                console.log(res.data.data);
                // setCart(res.data.data);
              })
              .catch((err) => {
                console.log(err);
                console.log("data insert fail");
              });
          })
          .catch((error) => {
            console.log(error);
          });
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };

  let checkout = new KhaltiCheckout(config);

  let buttonStyles = {
    backgroundColor: "purple",
    padding: "10px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    border: "1px solid white",
  };

  return (
    <div>
      <button
        onClick={() => {
          checkout.show({ amount: props.totalAmount * 100 });
          // hello();
        }}
        style={buttonStyles}
      >
        Pay Via Khalti
      </button>
    </div>
  );
}
