import React from 'react'
import styled from 'styled-components'
import {RiSendPlane2Fill} from 'react-icons/ri';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 60px;
`

const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 40px;
`

const InputContainer = styled.div`
    width: 80%;
    /* height: 80px; */
    /* padding: 8px; */
    display: flex;
    background-color: white;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding: 30px;
    outline: none;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #006BFF;
    color: white;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        scale: calc(1.1);
    }
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Start of Summer Up to 35% off on all items</Title>
        <InputContainer>
            <Input placeholder='Your Email Address' style={{fontSize:20}}/>        
            <Button>
                <RiSendPlane2Fill style={{fontSize: 30}}/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter