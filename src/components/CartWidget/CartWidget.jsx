import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import style from "./style.module.css"
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function CartWidget() {
  const {totalProducts} = useContext(CartContext)

  return (
    <div className={style.carro}>
      <Link to={"/cart"}>
    <AiOutlineShoppingCart className="fs-1"/>  <span className='fs-3'> {totalProducts} </span>
    </Link>
    </div>
  )
}

export default CartWidget