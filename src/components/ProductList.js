import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductListStyle from "../styles/ProductListStyle";
import { MdAddShoppingCart, MdRemoveShoppingCart } from "react-icons/md";

const { List, Product, Image, ProductDescription } = ProductListStyle;

const ProductList = () => {
  const { products, handleProduct } = useContext(ProductContext);

  return (
    <List>
      {products.map((product) => (
        <Product key={product.id}>
          <button onClick={() => handleProduct(product.id)}>
            {product.onCart ? <MdRemoveShoppingCart /> : <MdAddShoppingCart />}
          </button>
          <Image src={product.image} />
          <ProductDescription>
            {product.name}
            <h2>R${product.price.toFixed(2)}</h2>
          </ProductDescription>
        </Product>
      ))}
    </List>
  );
};

export default ProductList;
