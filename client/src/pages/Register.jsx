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
`

const Wrapper = styled.div`
    width: 40%;
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
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-style: 12px;
    margin: 20px 0px;
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
    transition: all .5s ease;

    &:hover {
    background-color: #006BFF;
    }
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Link to="/">
                <Logo src="https://i.ibb.co/M1h670Z/logoblack.png"/>
            </Link>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm password" />
                <Agreement>
                By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.
                </Agreement>
                <Button>Sign Up</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register