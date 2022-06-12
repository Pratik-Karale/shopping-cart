import React, { useEffect } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { items } from './shopItems'
import { ItemCheckoutCounter } from './ItemCheckoutCounter'
export const ShopItemPage = () => {
    let [addCartItem,deleteCartItem,getCartItems]=useOutletContext()
    let urlParams=useParams()
    const shopItemData=items.find((item)=>item.id==urlParams.itemId)
    console.log(shopItemData)
    let cartItemData=getCartItems()[urlParams.itemId]
    cartItemData=cartItemData?cartItemData:shopItemData
    console.log(cartItemData)
  return (
    <div>
        <br />
        <br />
        <br />
        <img width="300"src={shopItemData.imgURL}/>
        <h1>{shopItemData.name}</h1>
        <h3>${shopItemData.price}</h3>
        <br />
        <ItemCheckoutCounter addItem={addCartItem} deleteItem={deleteCartItem} item={cartItemData}/>
    </div>
  )
}
