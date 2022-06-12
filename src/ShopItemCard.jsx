import React from 'react'
import { Link } from 'react-router-dom'

export const ShopItemCard = ({item}) => {
  return (
    <Link to={"/shop/"+item.id}>
        <h2>{item.name}</h2>
        <img src={item.imgURL} width="70"/>
        <p>${item.price}</p>
    </Link>
  )
}
