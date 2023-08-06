import React from 'react'
import { styled } from 'styled-components'
import Announcements from '../Announcements'
import NavBar from './NavBar'
import Footer from '../Footer'
import { useEffect } from 'react'
const SuperContainer=styled.div`
    overflow: hidden;
`
const Container=styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url("wallpaperflare.com_wallpaper.jpg");
    display:flex;
    align-items: center;
    justify-content: center;
    `
const Wrapper=styled.div`
    width:40%;
    padding:20px; 
    background-color: white;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;

`
const Title=styled.h1`
    font-size: 30px;
    font-weight: 300;

`
const Form=styled.form`
    display:flex;
    flex-wrap: wrap;
    margin:10px 0px;

`
const Input=styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;  
    padding:7px;
`
const Agreement=styled.span`
    font-size: 15px;
    margin:20px 0px;

`
const NavWrap=styled.div`
  position:sticky;
  top:0;
  width:100%;
  height:100%;
  z-index:5;
  background-color: white;
  opacity:1;
`
const Button=styled.button`
    width:40%;
    border:none;
    padding: 10px 15px;
    background-color: teal;
    color:white;
    cursor:pointer;
`

const Register = () => {
useEffect(()=>window.scrollTo(0,0));
  return (
    <SuperContainer>
     <NavWrap>
        <Announcements/>
        <NavBar/>
    </NavWrap>
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Email"/>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
            </Form>
            <Agreement> By creating an account you agree to the processing of your personal data in accordance with the privacy policy</Agreement>
            <Button>CREATE</Button>
        </Wrapper>
    </Container>
    <Footer/>
    </SuperContainer>
  )
}

export default Register