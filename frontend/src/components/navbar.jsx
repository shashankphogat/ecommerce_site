import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "./navbar.css"
import { useContext } from 'react'
import { context } from '../context/productContext'


export const Navbar = () => {
  let {currentProducts,pageName,currentCart}=useContext(context);
  const [open, setOpen] = useState(false);
  let adder=(total,num)=>{
    return total+num;
  }
  let itemCartQuantity=Object.values(currentCart).reduce(adder,0);
  return (
    <div className="navBar">
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </div>
      <div className='logo'>
      <Link to="/">Nexatron</Link>
      </div>
      <div className='search_box'>
        {pageName==="shop"?
          <input placeholder='Search For Products' className='search' onChange={(e)=>currentProducts(e.target.value)}></input>:
            null
        }
      </div>
        <div className={`menu ${open ? "active" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Shop</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link to="/cart" onClick={() => setOpen(false)} className='cart_image_number'><div className='cart_image_container'><ShoppingCart size={32} className='cart_image'></ShoppingCart></div><div
        className='cart_number_container'><div className='cart_number'>{itemCartQuantity}</div></div></Link>
        </div>
              

    </div>
  )
}
