import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import { CartPage } from './CartPage';
import { Shop } from './Shop';
import { NotFound } from './NotFound';
import { Home } from './Home';
import { ShopItemPage } from './ShopItemPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
         <Route path="home" element={<Home/>}/>
         <Route path="shop">
           <Route path=":itemId" element={<ShopItemPage/>}/>
           <Route  path="" element={<Shop/>}/>
         </Route>
         <Route path="cart" element={<CartPage/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);