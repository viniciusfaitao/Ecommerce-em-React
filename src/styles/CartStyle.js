import styled from "styled-components";

const Modal = styled.div`
  width: 470px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 150px;
  right: 10px;
`;

const Container = styled.div`
  background-color: #fff;
  color: #000;
  font-family: cursive;
  margin: 2px;
  width: 100%;
`;

const ButtonClose = styled.div`
  width: 32px;
  height: 32px;
  font-size: 32px;
  cursor: pointer;
  float: right;
  margin: 12px;
`;

const Content = styled.div`
  margin: 20px;
  button {
    background: transparent;
    border: none;
    font-size: 14px;
  }
`;

const TotalPrice = styled.p`
  display: flex;
  flex-direction: row-reverse;
  font-weight: bold;
  font-size: 20px;
`;

export default {
  Modal,
  Container,
  ButtonClose,
  Content,
  TotalPrice,
};
