import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: darkgray;
    background-size: cover;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
`

const Logo = styled.img`
    display: flex;
    margin: auto;
    align-items: center;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 15px;
    border-radius: 5px;
`

const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 30px;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    background-color: darkgray;
    cursor: pointer;
    margin-bottom: 10px;
    transition: all .5s ease;

    &:hover {
    background-color: #006BFF;
    }
`



const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            <Link to="/">
                <Logo src="https://i.ibb.co/M1h670Z/logoblack.png"/>
            </Link>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                <Button>SIGN IN</Button>
                <Link to="">DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link to="">CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default SignIn