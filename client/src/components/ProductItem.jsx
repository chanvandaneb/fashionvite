import React from "react";
import styled from "styled-components";
import { BsBagFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-in;
  cursor: pointer;
`;

const Container = styled.div`
  
`;

const WrapProduct = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Name = styled.h1`
  font-size: 16px;
`;

const Price = styled.p`
  font-size: 20px;
  
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.2);
  }
`;



const ProductItem = ({ item }) => {
  const navigate = useNavigate();

  console.log(item);

  return (
    <Container onClick={() => navigate(`${item.id}`)}>
      <WrapProduct>
      <Circle/>
        <Image src={item.img} />
        <Info>
          <Icon>
            <BsBagFill />
          </Icon>
          <Icon>
            <FiSearch />
          </Icon>
          <Icon>
            <MdFavorite />
          </Icon>
        </Info>
      </WrapProduct>
      <Name>{item.name}</Name>
      <Price> <strong>$ {item.price} </strong><del> $ {item.dis_price}</del></Price>
    </Container>
  );
};

export default ProductItem;
