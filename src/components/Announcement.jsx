import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Container = styled.div`
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-left: 60px;
`;
const Right = styled.div`
  margin-right: 60px;
  cursor: pointer;
  display: flex;
`;

const IconStyle = {
    fontSize: 20,
    marginLeft: 15,
}

const Announcement = () => {
  return (
    <Container>
      <Left>FREE SHIPPING IN OVER PHNOM PENH!</Left>
      <Right>
        <BsFacebook style={IconStyle} />
        <BsInstagram style={IconStyle} />
        <BsTwitter style={IconStyle} />
      </Right>
    </Container>
  );
};

export default Announcement;
