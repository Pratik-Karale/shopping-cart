import React from 'react'
import { ShopItemCard } from './ShopItemCard'
import { items } from './shopItems'
export const Shop = () => {
  console.log(items)
  return (
    <div>
        <h1>Shop</h1>
        {items.map((item)=><ShopItemCard item={item}/>)}<br/>
    </div>
  )
}
