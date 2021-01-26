import React, { useContext, useMemo } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { AiFillCloseSquare, AiOutlineClose } from "react-icons/ai";
import CartStyle from "../styles/CartStyle";

const { Modal, Container, ButtonClose, Content, TotalPrice } = CartStyle;

const Cart = ({ onClose = () => {} }) => {
  const { handleProduct, productsOnCart } = useContext(ProductContext);

  const totalPrice = useMemo(
    () =>
      productsOnCart.length > 0 &&
      `Total: R$ ${productsOnCart
        .map((product) => product.price)
        .reduce((total, price) => total + price)
        .toFixed(2)}`,
    [productsOnCart]
  );

  return (
    <Modal>
      <Container>
        <ButtonClose>
          <AiFillCloseSquare onClick={onClose} />
        </ButtonClose>
        <Content>
          {productsOnCart.map((product) => (
            <div key={product.id}>
              <button onClick={() => handleProduct(product.id)}>
                <AiOutlineClose />
              </button>
              {product.name}
              <h4>R${product.price.toFixed(2)}</h4>
            </div>
          ))}
          {productsOnCart.length === 0 ? <h3>O carrinho está vazio!</h3> : null}
          <TotalPrice>{totalPrice}</TotalPrice>
        </Content>
      </Container>
    </Modal>
  );
};

export default Cart;
