import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { Products } from "../products";

export const context = createContext(null);

let defaultCart = {};
for (let i = 1; i < Products.length + 1; i++) {
  defaultCart[i] = 0;
}

export const ProductContextProvider = (props) => {
  let [currentCart, setCurrentCart] = useState(defaultCart);
  let [filteredProducts, setFilteredProducts] = useState(Products);
  let [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);
  let [pageName, setPageName] = useState("Shop");

  let addToCart = (id) => {
    setCurrentCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  useEffect(() => {
    updateNumberOfItemsInCart();
  }, []);

  let removeFromCart = (id) => {
    setCurrentCart((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  let updateCart = (newValue, id) => {
    setCurrentCart((prev) => ({ ...prev, [id]: Number(newValue) }));
  };

  let totalCost = () => {
    let total = 0;
    Products.forEach((product) => {
      if (currentCart[product.id] > 0) {
        total += product.price * currentCart[product.id];
      }
    });
    return total;
  };

  let currentProducts = (input) => {
    let filteredProducts = Products.filter((product) => {
      return product.name.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredProducts(filteredProducts);
  };

  let updateNumberOfItemsInCart = () => {
    [...Object.values(currentCart)].forEach((item) => {
      setNumberOfItemsInCart((prev) => prev + item);
    });
  };

  let changeCurrentPageName = (text) => {
    setPageName(text);
  };

  const data = {
    addToCart,
    currentCart,
    removeFromCart,
    updateCart,
    totalCost,
    currentProducts,
    filteredProducts,
    updateNumberOfItemsInCart,
    changeCurrentPageName,
    pageName,
    numberOfItemsInCart,
  };

  return <context.Provider value={data}>{props.children}</context.Provider>;
};
