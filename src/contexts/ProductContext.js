import React, { createContext, useState } from "react";
import Costumes from "../mock";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState(Costumes);
  const productsOnCart = products.filter((product) => product.onCart);

  const handleProduct = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, onCart: !product.onCart } : product
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{ products, handleProduct, productsOnCart }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
