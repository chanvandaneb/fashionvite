import React from 'react'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import {MdRemove} from 'react-icons/md'
import {MdAdd} from 'react-icons/md'



const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 600;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 60px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;

`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AmountContainer = styled.span`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #006BFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid #006BFF;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #006BFF;
    }

`

const Product = () => {
  return (
    <Container>
        <Wrapper>
            <ImgContainer>
                <Image src="https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Arura Edition Sneaker</Title>
                <Desc>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                        <FilterColor color="yellow"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>N</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>

                    <AmountContainer>
                        <MdRemove/>
                        <Amount>1</Amount>
                        <MdAdd/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>

                </AddContainer>

            </InfoContainer>
        </Wrapper>
        <Newsletter/>
    </Container>
  )
}

export default Product