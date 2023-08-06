import React from 'react'
import { styled } from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link} from 'react-router-dom'
const Info=styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity:0;
  top:0;
  left: 0;
  background-color:rgba(0,0,0,0.5);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  flex-direction: column;
`
const Container=styled.div`
  flex:1;
  margin:5px;
  min-width:280px;
  height:350px;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: #b6e1f0;
  overflow: hidden;
  position: relative;
  &:hover ${Info}{
      opacity:1;
  }

`
const Image=styled.img`
  height:100%;
  width:100%;
  z-index:2;
  object-fit: cover;
`
const Circle=styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  position:absolute;

`
const Icons=styled.div`
  display:flex;
`
const Icon=styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #c2bdbd;
  display: flex;
  align-items: center;
  border:none;
  cursor:pointer;
  justify-content: center;
  margin: 10px;
  &:hover{
    transform:scale(1.1);
    background-color: white;
  }
  transition: 0.5 all ease;
  
`
const Desc=styled.p`
  color:white;
  font-size: 17px;
  height:50%;
  justify-content: center;
`
const Title=styled.p`
  color:white;
  font-size: 35px;
  width:80%;
  text-align: center;
`
const Amount=styled.p`
  color:white;
  font-size:30px;
  justify-content: center;
`
const Product = ({item}:any) => {
  let product_url=`/product/${item._id}`
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
          <Title>
            {item.title}
          </Title>
          <Amount>
            Rs. {item.price}
          </Amount>
          <Icons>
          <Link to="/cart" style={{textDecoration:'inherit',}}>
            
          <Icon>
            <ShoppingCartIcon/>
          </Icon>
          </Link>
          <Link to={product_url} style={{textDecoration:'inherit'}}>
          <Icon>
            <SearchIcon/>
          </Icon>
          </Link>
          <Icon>
            <FavoriteIcon/>
          </Icon>
          </Icons>
          
          <Desc>
            {item.desc}
          </Desc>
          
        </Info> 
    </Container>
  )
}

export default Product