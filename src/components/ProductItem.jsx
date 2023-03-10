import React from 'react'
import styled from 'styled-components'
import { BsBagFill } from 'react-icons/bs';
import {FiSearch} from 'react-icons/fi';
import {MdFavorite} from 'react-icons/md';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.1);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease-in;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`

const Name = styled.h1``

const Price = styled.p``

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

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
`

const ProductItem = ({item}) => {
  return (
    <Container>
        <Circle/>
            <Image src={item.img}/>
            <Name src={item.name}/>
            <Price src={item.price}/>
        <Info>
            <Icon>
                <BsBagFill/>
            </Icon>
            <Icon>
                <FiSearch/>
            </Icon>
            <Icon>
                <MdFavorite/>
            </Icon>
        </Info>
    </Container>
  )
}

export default ProductItem