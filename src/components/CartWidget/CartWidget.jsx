import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import style from "./style.module.css"

function CartWidget() {
  return (
    <div className={style.carro}>
    <AiOutlineShoppingCart className="fs-1"/>  <span className='fs-3'> 0 </span>
    </div>
  )
}

export default CartWidget