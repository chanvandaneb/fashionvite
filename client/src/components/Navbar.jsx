import React from "react";
import styled from "styled-components";
import { BsBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 100px;
  background-color: white;
  ${mobile({ height: "50px"})}
  
`;
const Wrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  justify-content: center;
`;

const Logo = styled.img``;


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center"})}
`;


const ItemLink = styled(Link)`
  margin: 0px 15px;

  
  &:hover {
    border-bottom: 1px solid #585858;
    color: #000000;
    font-weight: 800;
    scale: calc(1.04);
  }
`;

const Navbar = () => {


    const dataLink = [
        {
            pathName: 'HOME',
            to: '',
        },
        {
            pathName: 'PRODUCT',
            to: '/product-list',
        },
        {
            pathName: 'ABOUT',
            to: '/about-us',
        },
        {
            pathName: 'CONTACT US',
            to: '/contact-us',
        },
    ]


  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="https://i.ibb.co/M1h670Z/logoblack.png"></Logo>
        </Left>
        <Center>

        { dataLink.map(({pathName, to}, index) => {
            return (
                
                <ItemLink key={index} to={to}>{pathName}</ItemLink>
            )
        }) }

        </Center>
        <Right>
            <ItemLink to="register">REGISTER</ItemLink>
            <ItemLink to="sign-in">SIGN IN</ItemLink>
            
            <ItemLink to="cart">
                <BsBagFill style={{fontSize: 30}}/>
            </ItemLink>

            
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
