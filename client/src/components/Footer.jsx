import React from "react";
import styled from "styled-components";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 80vh;
  color: white;
  background-color: black;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 80px 60px;
  flex-direction: row;
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
  margin-right: 100px;
`;
const Logo = styled.img``;

const Desc = styled.p`
  margin: 10px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    scale: calc(1.2);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  width: 50%;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    color: #006bff;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const End = styled.div`
  flex: 1;
  padding: 20px;
`;
const Img = styled.img`
  width: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    scale: calc(1.1);
  }
`;

const Copyright = styled.div`
  height: 1px;
  background-color: white;
`;

const CopyrightText = styled.p`
  padding: 20px 0;
  text-align: center;
`;

const ItemLink = styled(Link)`
  border-bottom: 1px solid transparent;
  color: white;

  &:hover {
    border-bottom: 1px solid white;
    color: white;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="https://i.ibb.co/0j4dLf0/logowhite.png"></Logo>
          <Desc>
            Babype was founded in 2019 with vision of building the best online
            store for children clothing.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <BsFacebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <BsInstagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <BsTwitter />
            </SocialIcon>
          </SocialContainer>
        </Left>

        <Center>
          <Title>Information</Title>
          <List>
            <ListItem>
              <ItemLink to="/privacy-policy">Privacy Policy</ItemLink>
            </ListItem>
            <ListItem>
              <ItemLink to="/refund-policy">Refund Policy</ItemLink>
            </ListItem>
            <ListItem>
              <ItemLink to="/shipping-policy">Shipping Policy</ItemLink>
            </ListItem>
            <ListItem>
              <ItemLink to="/term-and-conditions">Term and Conditions</ItemLink>
            </ListItem>
          </List>
        </Center>

        <Right>
          <Title>Get Help</Title>
          <List>
            <ListItem>
              <ItemLink to="/about">About</ItemLink>
            </ListItem>
            <ListItem>
              <ItemLink to="/contact-us">Contact Us</ItemLink>
            </ListItem>
            <ListItem>
              <ItemLink to="/faqs">FAQs</ItemLink>
            </ListItem>
          </List>
        </Right>
        <End>
          <Title>Scan To See</Title>
          <List>
            <Img src="https://i.ibb.co/7zPQTqD/qr.png"></Img>
          </List>
        </End>
      </Wrapper>

      <Copyright>
        <CopyrightText>
          Copyright ©2023{" "}
          <ItemLink to="/">
            <span style={{ fontWeight: 700 }}>Babype</span>{" "}
          </ItemLink>
          (Cambodia) - All rights Reserved
        </CopyrightText>
      </Copyright>
    </Container>
  );
};

export default Footer
