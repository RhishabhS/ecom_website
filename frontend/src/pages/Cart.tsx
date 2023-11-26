import React from "react";
import { styled } from "styled-components";
import Announcements from "../Announcements";
import NavBar from "./NavBar";
import Footer from "../Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
import { products } from "./../data";
import { useState } from "react";
import {removeProduct} from "../redux/cartRedux"
import { Link } from "react-router-dom";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h1`
  font-weight: 500;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TopButton = styled.button<{ type: string }>`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "teal" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};
  &:hover {
    background-color: ${(props) =>
      props.type === "filled" ? "teal" : "black"};
    color: ${(props) => (props.type === "filled" ? "white" : "white")};
  }
`;
const TopTexts = styled.div``;
const TopText = styled.span<{ type: string }>`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img``;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductID = styled.span``;
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductColor = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const ProductAmount = styled.div``;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const SummaryItemText = styled.span<{ type: string }>`
  font-weight: ${(props) => props.type === "total" && "700"};
  font-size: ${(props) => props.type === "total" && "28px"};
`;
const SummaryItemPrice = styled.div<{ type: string }>`
  font-size: ${(props) => (props.type === "total" ? "28px" : "20px")};
  font-weight: ${(props) => (props.type === "total" ? "700" : "300")};
`;
const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: teal;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const ProductAmountContainer = styled.span`
  display: flex;
  align-items: center;
`;
const ProductPrice = styled.div`
  margin: 5px;
`;
const Cart = () => {
  const inp= useSelector((state: any) => state.cart);
  const [cart,setCart]=useState({...inp});
  console.log("cart",cart);
  console.log('products',cart.products);
  const handleRemove=(e)=>{
    
  }
  return (
    <Container>
      <Announcements />
      <NavBar />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton type="filled"><Link to="/products" style={{textDecoration:"none", color:'white'}}>Continue Shopping</Link></TopButton>
          {/* <TopTexts>
            <TopText type="na">Shopping Bag</TopText>
            <TopText type="na">Your WishList</TopText>
          </TopTexts> */}
          <TopButton type="na">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((item:any,index:any)=>{
              return <Product>
              <ProductDetail>
                <Image src={item.img}/>
                <Details>
                  <ProductName>
                    <b>Product: </b>{item.title}
                  </ProductName>
                  <ProductID>
                    <b>ID: </b>
                    {item._id}
                  </ProductID>
                  <ProductColor color={item.color} />
                  <ProductSize>
                    <b>Size: </b>
                    {item.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon style={{cursor:"pointer"}} onClick={()=>setCart({...cart,item: item.quantity+=1,total:cart.total+item.price})}/>
                  <ProductAmount>{item.quantity}</ProductAmount>
                  <RemoveIcon style={{cursor:"pointer"}} onClick={()=>{
                    setCart({...cart,item:item.quantity>=1?item.quantity-=1:item.quantity,total:item.quantity>=1?cart.total-item.price:cart.total});
                    if(item.quantity==0){
                      setCart({...cart,products:cart.products.filter(ele=>ele!=item),total:cart.products.filter(ele=>ele!=item).map(ele=>ele.quantity*ele.price).reduce((accumulator,currentValue)=>accumulator+currentValue,0)})
                    }
                  }}/>   
                </ProductAmountContainer>
                <ProductPrice>Rs. {item.price}</ProductPrice>
              </PriceDetail>
            </Product>;
            })}
                
          </Info>
          <Summary>
            <SummaryTitle>Summary</SummaryTitle>
            {cart.products.map((item: any) => {
              return <SummaryItem>
                <SummaryItemText type="">{item.title}  x   {item.quantity}</SummaryItemText>
                <SummaryItemPrice type=""><CurrencyRupeeIcon style={{fontSize:"20px",}}/>{item.price*item.quantity}</SummaryItemPrice>
              </SummaryItem>;
            })}
            <SummaryItem>
              <SummaryItemText type="total">Total</SummaryItemText>
              <SummaryItemText type="total"><CurrencyRupeeIcon/>{cart.total}</SummaryItemText>
            </SummaryItem>
              {/* Use payment gateway of choice */}
              <form action="/create-checkout-session" method="POST">
                <Button type="submit">CHECKOUT NOW</Button>
              </form>
              
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
