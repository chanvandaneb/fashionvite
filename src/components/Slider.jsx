import React from 'react'
import styled from 'styled-components'
import {SlArrowLeft} from 'react-icons/sl';;
import {SlArrowRight} from 'react-icons/sl';
import { sliderItems } from '../data';
import { useState } from 'react';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: white;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    margin: auto;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 2s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;

`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70;
`
const Desc = styled.p`
    margin: 25px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`
const Button = styled.button`
    width: 200px;
    padding: 20px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: white;
        background-color: black;
    }
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left" ) {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <SlArrowLeft style={{color:"white", fontSize:50}}/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>

            {sliderItems.map((item) => (

            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
                <Image src={item.img}></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>
                {item.desc}
                </Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>

            ))};
            
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <SlArrowRight style={{color:"white", fontSize:50}}/>
        </Arrow>
    </Container>
  )
}

export default Slider