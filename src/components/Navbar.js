import React, { useContext, useState } from "react";
import NavbarStyle from "../styles/NavbarStyle";
import { ProductContext } from "../contexts/ProductContext";
import { MdShoppingCart } from "react-icons/md";
import Cart from "./Cart";

const { Container, CartButton, CartCounter, Logo, TitlePage } = NavbarStyle;

const Navbar = () => {
  const { productsOnCart } = useContext(ProductContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <Container>
      <Logo />
      <TitlePage>Disney Costumes</TitlePage>
      <CartButton>
        <MdShoppingCart onClick={() => setIsModalVisible(true)} />
        {productsOnCart.length > 0 && (
          <CartCounter>{productsOnCart.length}</CartCounter>
        )}
      </CartButton>
      {isModalVisible ? (
        <Cart onClose={() => setIsModalVisible(false)} />
      ) : null}
    </Container>
  );
};

export default Navbar;
