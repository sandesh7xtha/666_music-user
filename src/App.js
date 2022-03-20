import logo from './logo.svg';
import React, { useState } from "react";

import './App.css';
import { Navbar } from './Components/navbar/Navbar';
import { News } from './Components/news/News';
import {Shop} from './Components/shop/Shop';
import {SecondProduct} from './Components/secondProduct/SecondProduct';
import {AddSell} from './Components/account/AddSell/AddSell';
import {MyProduct} from './Components/account/MyProduct/MyProduct';
import {SignIn} from './Components/account/Sign In/SignIn';
import NewAccount from './Components/account//NewAccount/NewAccount';
import { Cart } from './Components/navbar/cart/Cart';
import { ShopProductDetail } from './Components/shop/shopProductDetail/ShopProductDetail';
import { SecondhandDetail } from './Components/secondProduct/SecondhandDetail/SecondhandDetail';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  const [ProductSearch, setProductSearch] = useState(''); 
  function search(searchValue) {
 
    setProductSearch(searchValue)
  }
  return (
    <div >
      
        <BrowserRouter>
        <Navbar search={search}/>
          <Switch>

              <Route exact path="/" component={News} />
              <Route exact path="/news" component={News} />
              <Route exact path="/shop" component={props => <Shop {...props} navSearchBar={ProductSearch}/>} />
              <Route exact path="/secondProduct"  component={props => <SecondProduct {...props} navSearchBar={ProductSearch}/>} />
              <Route exact path="/addSell" component={AddSell} />
              <Route exact path="/signIn" component={SignIn} />
              <Route exact path="/createNewAcount" component={NewAccount} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/myProduct" component={MyProduct} />
              <Route exact path="/ShopProductDetail/:id" component={ShopProductDetail} />
              <Route exact path="/secondhandDetail/:id" component={SecondhandDetail} />
              

          </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
