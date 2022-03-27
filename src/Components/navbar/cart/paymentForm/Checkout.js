import { Button } from '@mui/material';
import React, { useState } from 'react'
import * as c from '../paymentForm/checkout.css'
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";




 const Checkout = () => {
  const [payment, setPayment]=  useState({
    fullName: "",
    address: "",
    contactNumber: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });




  return (
<c.root>
    <AddressForm setPayment={setPayment}/>
    <PaymentForm/>
    {/* <Review/> */}
    <Button>pay</Button>
</c.root>
  )
}

 export default Checkout; 