import React from 'react'
import { styled } from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { mobile } from './../Responsive';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
const Container=styled.div` 
  height: 100px;
  ${mobile({height:"10px"})}

  /* background-color: black; */
`
const Wrapper= styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({padding:"7px 0px"})}
`
const Left=styled.div`
    flex:1;
    display: flex;
    align-items: center;

`

const Center=styled.div`
  flex:2;
  text-align: center;
`
const Right=styled.div`
  flex:1;
  display:flex;
  align-items: center;
  justify-content: flex-end;
`
const Lang=styled.span`
    font-size:10;
    cursor:pointer;
    ${mobile({display:"none"})}

`
const SearchContainer=styled.div`
  border: 1px solid lightgray;
  display:flex;
  align-items: center;
  margin-left:25px;

`
const Input=styled.input`
  border:none;
  ${mobile({width:"30px"})}
`
const Logo=styled.h1`
  font-weight: bold;
  text-align: center;
  font-size:40px;
`
const MenuItem=styled.div`
  font-size:14px;
  cursor: pointer;
  margin-left: 25px;
  
  `
const NavBar = () => {
  const cart=useSelector((state:any)=>state.cart);
  console.log(cart);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lang>EN</Lang>
          <SearchContainer>
            <Input></Input>
            <SearchIcon></SearchIcon>
            </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={()=>window.scrollTo(0,0)}>
            <Link to='/' style={{textDecoration:"none",color:'black'}}>RS</Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
          <Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link>
          </MenuItem>
          <MenuItem>
          <Link to="/register" style={{textDecoration:"none", color:"black"}}>Register</Link>
          </MenuItem>
          <MenuItem>
          <Link to='/login' style={{textDecoration:"none", color:"black"}}>Sign in</Link>
          </MenuItem>
          <MenuItem>
          <Badge badgeContent={cart.quantity.reduce((a:any,b:any)=>a+b,0)} color="primary">
          <Link to='/cart' style={{color:"black"}}><ShoppingCartIcon></ShoppingCartIcon></Link>
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar