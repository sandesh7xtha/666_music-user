import React,{useState} from 'react'
import * as c from './Cart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useEffect } from 'react';

// import StripeCheckout from "react-stripe-checkout";
// import Checkout from "../cart/checkOut/Checkout";
import Checkout from "../cart/paymentForm/Checkout";


export const Cart = () => {

    const [cart, setCart] = useState([]);
    const id = localStorage.getItem("id");
    const getCartFroMDB = ()=>{
        axios
        .get("http://localhost:4000/addToCart/"+id)
        .then((res) => {
          console.log(res.data.data);
          setCart(res.data.data);
         
        })
        .catch((err) => {
          console.log(err);
          console.log("data insert fail");
          
        });
    
    }

    useEffect(()=>{
        getCartFroMDB();
    },[]);

    return (
        <c.root>
            <c.cartBox>

                <c.content>
                    <c.head>
                        <p style={{color:'white'}}>Product</p>
                        <p style={{marginLeft:'35rem',color:'white'}}>Quantity</p>
                        <p style={{marginRight:'4rem',color:'white', marginLeft:'3rem'}}>Price</p>
                    </c.head>
                    <c.Grid >

                        {cart.map((item , index) => (  
                                  
                            <c.Item>
                                
                                <img src={item.image}/>
                                <c.detail>
                                    
                                    <name >{item.title}</name>
                                    <dis>{item.description}</dis>
                                    <DeleteIcon  style={{marginLeft:'20rem', marginBottom:'0.0rem'}} />

                                </c.detail>
                            
                                <c.quantity>
                                    <quantity>{item.quantity}</quantity>
                                </c.quantity>
                                <c.price>
                                    <price> Rs.{item.price}</price><br/>
                                    
                                    <price>Total Rs.{item.price *item.quantity}</price>
                                </c.price>

                            </c.Item>
                        ))}

                    </c.Grid>
                </c.content>
                {/* <StripeCheckout shippingAddress/> */}
<Checkout/>
            </c.cartBox>
        </c.root>
    )
}
