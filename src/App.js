import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { items } from "./shopItems";
function App() {
  const [cartItems, setCartItems] = useState({})

  const getCartItems=()=>cartItems

  const addCartItem = (itemId, count=1) => {
    let item
    if(itemId in cartItems){
      item=cartItems[itemId]
      item.count+=count
    }else{
      item=items.find((item)=>item.id==itemId)
      item.count=count
    }
    cartItems[itemId]=item
    setCartItems(cartItems)

    new Promise((res=>res())).then(()=>console.log(cartItems))
  }
  
  const deleteCartItem = (itemId,count=1) => {
    let item
    if(itemId in cartItems && cartItems[itemId].count!=0){
      item=cartItems[itemId]
      item.count-=count
    }else{
      return;
    }
    cartItems[itemId]=item
    setCartItems(cartItems)
  }
  const emptyCart=()=>setCartItems({})
  
  
  
  return (
    <div className="App">
      <nav>
        <Link to="/home">Home</Link>{"      |     "}
        <Link to="/shop">Shop</Link>{"      |     "}
        <Link to="/cart">Cart</Link>
      </nav>
      <Outlet a="121fdgfdfgfd21221" context={[addCartItem,deleteCartItem,getCartItems,emptyCart]} />
    </div>
  );
}

export default App;
