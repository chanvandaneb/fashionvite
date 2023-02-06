import React from "react";
import styled from "styled-components";
import { BsBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100px;
  background-color: white;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;



const Navbar = () => {


    const dataLink = [
        {
            pathName: 'HOME',
            to: '',
        },
        {
            pathName: 'PRODUCT',
            to: '/product',
        },
        {
            pathName: 'ABOUT',
            to: '/about-us',
        },
        {
            pathName: 'NEWS/EVENT',
            to: '/news-event',
        },
    ]

    const styledLink = {
        color: "Green", textDecoration: "none", padding: "0px 20px", cursor: "pointer"
    }


  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="https://i.ibb.co/ths3WXg/logoblack.png"></Logo>
        </Left>
        <Center>

        { dataLink.map(({pathName, to}, index) => {
            return (
                
                <Link style={{color: "Green", textDecoration: "none", padding: "0px 20px", cursor: "pointer"}} key={index} to={to}>{pathName}</Link>
            )
        }) }

        </Center>
        <Right>
            <Link style={{color: "Green", textDecoration: "none", cursor: "pointer"}} to="/register">REGISTER</Link>
            <Link style={styledLink} to="sign-in">SIGN IN</Link>
            
            <Link style={styledLink} to="cart">
                <BsBagFill />
            </Link>

            
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
