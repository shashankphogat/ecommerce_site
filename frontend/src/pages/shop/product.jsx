import React, { useContext } from "react";
import { context } from "../../context/productContext";
import { useEffect } from "react";

export const Product = (props) => {
  const { id, name, price, image } = props.data;
  const { addToCart, currentCart } = useContext(context);
  const itemCartQuantity = currentCart[id];

  return (
    <div className="product">
      <img className="image" src={image}></img>
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>₹ {price}</p>
        <button className="btn" onClick={() => addToCart(id)}>
          Add to cart ({itemCartQuantity})
        </button>
      </div>
    </div>
  );
};
