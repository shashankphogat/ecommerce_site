import React,{ useContext } from 'react'
import {context} from  "../../context/productContext";

export const CartItem = (props) => {
    const {id,name,price,image}=props.data;
    const {currentCart,addToCart,removeFromCart,updateCart }=useContext(context);
    const itemInCart= ()=>{
        if(currentCart[id]!=0){
            return true;
        }
        else{
            return false;
        }
    }
  return (
   itemInCart()?
    <div className="product_cart">
        <img className="image_cart" src={image}></img>
        <div className='item_details'>
        <p className='item_name'>{name}</p>
        <p className='item_price'>Price : ₹{price}</p>
        <button onClick={()=>addToCart(id)} className='plus_button'>+</button>
        <input value={Number(currentCart[id])} onChange={(e)=>updateCart(e.target.value,id)} className='item_input'></input>
        <button onClick={()=>removeFromCart(id)} className='minus_button'>-</button>
        </div>
        </div>
    :
    null
  )
    }

