import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { ShopItemCard } from './ShopItemCard'
import { ItemCheckoutCounter } from './ItemCheckoutCounter'
export const CartPage = () => {
    const [addCartItem,deleteCartItem,getCartItems,emptyCart]=useOutletContext()
    const [cartItems,setCartItems]=useState(Object.values(getCartItems()))
    const [total,setTotal]=useState(getItemsTotal(cartItems))

    function getItemsTotal(items){
        return items.reduce((prev,next)=>{return prev+next.price*next.count},0)
    }

    const onChange=()=>{
        setCartItems(Object.values(getCartItems()))
        setTotal(getItemsTotal(cartItems))
    }
  return (
    <div>
        <h1>Cart</h1>
        <hr />
        <br />
        {cartItems.map(item=>(<div>
            <ShopItemCard item={item}/>
            <ItemCheckoutCounter addItem={addCartItem} deleteItem={deleteCartItem} item={item} onChange={onChange}/>
        </div>))}
        <hr />
        <hr />
        <h4>Total : {total}</h4>
        <hr />
        <button onClick={()=>{
            emptyCart()
            alert("Checkout Complete!")
            document.querySelector("[href='/home']").click()
        }}>CHECKOUT</button>
    </div>
  )
}
