import React from 'react'
import styled from 'styled-components'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const Container = styled.div`
    height: 40px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    font-size: 18px;
    font-weight: 500;
    margin-left: 15px;
`
const Right = styled.div`
    margin-right: 15px;
    cursor: pointer;
    display: flex;
`

const Announcement = () => {
  return (
    <Container>
        <Left>
            Free Shipping On Over Phnom Penh        
        </Left>
        <Right>
            <BsFacebook style={{fontSize:30}}/>
            <BsInstagram style={{marginLeft: 10, fontSize:30}}/>
            <BsTwitter style={{marginLeft: 10, fontSize:30}}/>
        </Right>
        
    </Container>
  )
}

export default Announcement