import React from 'react'
import { styled } from 'styled-components'
import Announcements from '../Announcements'
import NavBar from './NavBar'
import Footer from '../Footer'
import { useEffect } from 'react'
import { useState } from 'react';
import { login } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
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
    width:25%;
    padding:20px; 
    background-color: white;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;

`
const Title=styled.h1`
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 0px;

`
const Form=styled.form`
    display:flex;
    flex-direction: column;
    margin:10px 0px;

`
const Input=styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;  
    padding:7px;
`
// const Agreement=styled.span`
//     font-size: 15px;
//     margin:20px 0px;

// `
const Button=styled.button`
    width:40%;
    border:none;
    padding: 10px 15px;
    background-color: teal;
    color:white;
    cursor:pointer;
    margin-bottom: 10px;
    &:disabled{
        color:green;
        cursor:not-allowed;
    }
`
const Link=styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor:pointer;


`
const Error=styled.span`
    color:red;
    font-size: 15px;
`
const Login = () => {
    useEffect(()=>window.scrollTo(0,0));
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const {isFetching, error}=useSelector((state:any)=>state.user);
    const dispatch=useDispatch();
  return (
    <SuperContainer>
    <Announcements/>

    <NavBar/>
    <Container>
           
        <Wrapper>
            <Title>SIGN IN FOR REGISTERED USERS</Title>
            <Form> 
                <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                <Input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}type='password'/>
            </Form>
            <Button onClick={(e)=>{
                e.preventDefault();
                login(dispatch,{username,password});
            }
            }
            disabled={isFetching}>LOGIN</Button>
            {error&&<Error>Something went wrong</Error>}
            <Link>Forgot password?</Link>
            <Link>Create new account</Link>
        </Wrapper>
    </Container>
    <Footer/>
    </SuperContainer>
  )
}

export default Login