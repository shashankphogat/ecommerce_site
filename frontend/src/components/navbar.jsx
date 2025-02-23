import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "./navbar.css"
import { useContext } from 'react'
import { context } from '../context/productContext'


export const Navbar = () => {
  let {currentProducts,pageName,currentCart}=useContext(context);
  let adder=(total,num)=>{
    return total+num;
  }
  let itemCartQuantity=Object.values(currentCart).reduce(adder,0);
  return (
    <div className="navBar">
      <div className='search_box'>
        {pageName==="shop"?
        <input placeholder='Search For Products' className='search' onChange={(e)=>currentProducts(e.target.value)}></input>:
        null
}
      </div>
        <div className="links">
        <Link to="/contact">Contact</Link>
        <Link to="/">Shop</Link>
        <Link to="/cart" className='cart_image_number'><div className='cart_image_container'><ShoppingCart size={32} className='cart_image'></ShoppingCart></div><div
        className='cart_number_container'><div className='cart_number'>{itemCartQuantity}</div></div></Link>
        </div>
    </div>
  )
}
