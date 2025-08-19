import React from "react";
import "./cart.css";

import { Products } from "../../products";
import { CartItem } from "./cart-item";

import { useNavigate } from "react-router-dom";
import { context } from "../../context/productContext";
import { useContext } from "react";
import { useEffect } from "react";

export const Cart = () => {
  const navigate = useNavigate();
  const { totalCost, changeCurrentPageName, currentCart } = useContext(context);
  async function handleSubmit() {
    document.forms.paymentForm.totalCost.value = totalCost();
    let productsName = Products.map((item) => {
      if (currentCart[item.id] !== 0) {
        return item.name;
      }
    });
    let productsDescription = Products.map((item) => {
      if (currentCart[item.id] !== 0) {
        return JSON.stringify(item.description);
      }
    });
    document.forms.paymentForm.productsName.value = productsName;
    document.forms.paymentForm.productsDescription.value = productsDescription;

    document.forms.paymentForm.submit();
  }
  useEffect(() => {
    changeCurrentPageName("cart");
  });

  return (
    <>
      <div className="title_cart">
        <h1>Your Cart items</h1>
      </div>
      {totalCost() > 0 ? (
        <div>
          <div className="cartProducts">
            {Products.map((product) => {
              return <CartItem data={product} />;
            })}
          </div>
          <p className="total_cost">Total Cost : ₹ {totalCost()}</p>
          <form name="paymentForm" method="post" action="/getPayment">
            <div className="btns">
              <div>
                <button onClick={() => navigate("/")}>Continue shopping</button>
              </div>
              <input type="hidden" name="totalCost" />
              <input type="hidden" name="productsName" />
              <input type="hidden" name="productsDescription" />
              <div>
                <button onClick={handleSubmit}>Check out</button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="cart_empty">Your cart is empty</div>
      )}
    </>
  );
};
