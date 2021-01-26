import styled from "styled-components";

const Container = styled.header`
  @import url("https://fonts.googleapis.com/css?family=Montserrat+Subrayada|Raleway&display=swap");
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  color: oldlace;
  box-shadow: 20px 7px 20px black;
  padding: 15px;

}
  h1 {
    font-family: "Montserrat Subrayada", sans-serif;
    font-weight: 400;
    font-size: 40px;
    letter-spacing: -1px;
  }
  span {
    font-family: "Raleway", sans-serif;
    font-size: 40px;
  }
`;

const CartButton = styled.button`
  width: 45px;
  height: 40px;
  font-size: 25px;
  background-color: transparent;
  color: oldlace;
  margin-right: 40px;
  border: none;
  cursor: pointer;
  outline: 0;
  display: flex;
  margin-top: 12px;
  box-shadow: 0px 0px 15px black;
  place-items: center;
`;

const CartCounter = styled.div`
  font-size: 12px;
  font-weight: bolder;
  border-radius: 50%;
  width: 30%;
  padding: 1px;
  overflow: hidden;
  color: oldlace;
`;

const Logo = styled.div`
  background-image: url("https://i.pinimg.com/originals/c0/59/ba/c059baa33fe7cf1bb97374cbe8ed2840.png");
  width: 205px;
  height: 100px;
  background-size: cover;
`;

const TitlePage = styled.h1`
  @media (max-width: 750px) {
    display: none;
  }
  font-weight: bold !important;
`;

export default { Container, CartButton, CartCounter, Logo, TitlePage };
