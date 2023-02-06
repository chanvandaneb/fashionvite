import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1``;

const ProductShow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Button = styled.button`
color: #585858;
  font-weight: 800;
  padding: 20px 60px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  transition: all 0.2s ease-in-out;
  display: block;
  margin: 40px auto;

  &:hover {
    background-color: black;
    color: #ffffff;
  }
`

const Product = () => {
  return (
    <Container>
      <Title>Popular Products</Title>
      <ProductShow>
        {popularProducts.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </ProductShow>
      <Button>LOAD MORE</Button>
    </Container>
  );
};

export default Product;
