import styled from "styled-components";

const Image = styled.div`
  background-image: ${(props) => `url('${props.src}')`};
  background-size: cover;
  background-position: center;
  height: 265px;
  width: 100%;
`;

const Product = styled.li`
  margin: 10px 10px 25px 0;
  list-style: none;
  box-shadow: 0px 0px 5px black;
  display: flex;
  flex-direction: row-reverse;
  background-color: white;
  button {
    width: 45px;
    height: 40px;
    font-size: 25px;
    background-color: white;
    border: none;
    cursor: pointer;
  }

  button:focus {
    outline: 0;
  }
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin: 15px 50px;
`;

const ProductDescription = styled.div`
  width: 200px;
  margin: 12px;
  text-align: center;
  font-family: cursive;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: bolder;
  font-size: 14px;
`;

export default { Image, Product, List, ProductDescription };
