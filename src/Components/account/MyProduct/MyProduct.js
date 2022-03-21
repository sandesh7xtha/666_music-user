import React,{useState} from 'react'
import * as p from './MyProduct.css';
import {Redirect, useHistory} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';



export const MyProduct = () => {
    const history = useHistory();
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const id = localStorage.getItem("id");
    const logout =() =>{localStorage.removeItem("name");localStorage.removeItem("token");localStorage.removeItem("id");history.push('/signIn');window.location.reload(false);}
    const push =() =>{ history.push('/addsell');}
    const refreshPage = ()=>{
        window.location.reload();
     }
 
   
    const [myProduct, setMyProduct] = useState([]);

    const getMyProductFroMDB = ()=>{
        axios
        .get("http://localhost:4000/secondProduct/MyProduct/"+id)
        .then((res) => {
          console.log(res.data.data);
          setMyProduct(res.data.data);
         
        })
        .catch((err) => {
          console.log(err);
          console.log("data insert fail");
          
        });
    
    }

    const deleteProduct =(shpID) =>{
        axios
        .delete("http://localhost:4000/secondProduct/DeleteProduct/"+shpID)
        .then((res) => {
          console.log("deleted");

         
        })
        .catch((err) => {
          console.log(err);
          console.log("data insert fail");
          
        });  
        refreshPage()
        getMyProductFroMDB()
    }

    
    useEffect(()=>{
        getMyProductFroMDB();
    },[]);

    if(!token){
        return <Redirect to="/signIn"/>
  
      }
  

    return (
        <p.root>
            <p.div>
                <p.NavMenu>
                    <p.userName>{name}</p.userName>

                    <p onClick={push}>Add Sell</p>
                    <p>My Product</p>
                    <p onClick={logout} >Log out</p>
                </p.NavMenu>

                <p.productSection>

                    <p.Grid>

                        {myProduct.map((item , index) => (    
                        <p.Item>
                        <Link to={"/secondhandDetail/"+item.shp_id} style={{textDecoration:"none"}}>    
                        <img className="img" src={item.image ? item.image :" "}/>
                        <name>{item.title ? item.title :" "} ....</name>
                        </Link>
                        <p.subGrid>
                            <price>Rs.{item.price ? item.price :" "}</price>
                            <DeleteIcon onClick={()=>{deleteProduct(item.shp_id)}} />
                        </p.subGrid>

                        </p.Item>
                        ))}

                    </p.Grid>
                </p.productSection>
            </p.div>
        </p.root>
    )
}
