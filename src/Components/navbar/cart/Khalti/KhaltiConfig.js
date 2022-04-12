import axios from "axios";

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
          alert("Thank you for generosity");
          axios
            .get("http://localhost:4000/")
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

export default config;
