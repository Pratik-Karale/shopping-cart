import React, { useState,useEffect } from 'react'

export const ItemCheckoutCounter = ({addItem,deleteItem,item,onChange}) => {
  const [itemCount,setItemCount]=useState((item.count)?item.count:0)
  useEffect(() => {
    onChange&&onChange()
  }, [itemCount])
  useEffect(()=>{
    // console.log(item)
    setItemCount(isFinite(item.count)?item.count:0)
  },[])
  
  return (
    <div>
        <button onClick={()=>{addItem(item.id);setItemCount(itemCount+1)}}>+</button>
        {itemCount}
        <button onClick={()=>{deleteItem(item.id);if(itemCount!=0)setItemCount(itemCount-1)}}>-</button>
    </div>
  )
}
