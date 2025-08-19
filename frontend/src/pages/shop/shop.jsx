import React from "react";
import { Product } from "./product.jsx";
import "./product.css";
import { context } from "../../context/productContext";
import { useContext } from "react";
import { useEffect } from "react";

export const Shop = () => {
  const { filteredProducts, changeCurrentPageName } = useContext(context);
  useEffect(() => {
    changeCurrentPageName("shop");
  }, []);
  return (
    <div>
      <div className="products">
        {filteredProducts.map((product) => {
          return <Product data={product} />;
        })}
      </div>
    </div>
  );
};
