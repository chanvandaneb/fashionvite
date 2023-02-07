import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 60px;
`
const Wrapper = styled.div`
`
const HeaderBg = styled.div`
    
`
const Image = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;
    position: relative;
`

const Title = styled.h1`
    color: white;
    font-size: 100px;
    font-weight: 900;
    position: absolute;
    text-align: center;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const Paragraph = styled.p`

    font-size: 20px;
    line-height: 40px;
    margin: 100px 60px;
`

const About = () => {
  return (
    <Container>
        <Wrapper>
            <HeaderBg>
                <Image src='https://wallpaper.dog/large/10994691.jpg'/>
                <Title>About</Title>
            </HeaderBg>

            <Paragraph>
            Arura® is one of the world's leading online discount stores. We are a fast growing company because we always put the customer first. A customer centered shopping experience has always been our goal, and we pride ourselves in our comprehensive policies that have put us in a realm above and beyond our competitors. Here at Arura® .we believe in passing along deeply discounted sale prices to our customers, typically saving them 10-50% off of retail costs.

            Our company is built on three core principles:

            <br/>
            
            Excellent products
            Excellent prices
            Excellent customer service
            We believe that serving our customers upholds a responsibility to ensure that they are satisfied with their purchases. We will do our best to make sure that our customers are happy. We believe we can create a good impact in the industry forever by focusing on our customers' needs.
            
            We're glad you've found your way to the online store that's known not only for the deep discounts but also for our top-notch customer service. We hope you'll be back often and spread the word to all your friends! Shop with us today and see the Arura® difference.
            </Paragraph>
        </Wrapper>
    </Container>
  )
}

export default About