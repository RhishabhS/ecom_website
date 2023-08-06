import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import NavBar from "./NavBar";
import Announcements from "../Announcements";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import { FilterData } from "../data";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Product from "./../Product";
import { addProduct } from "../redux/cartRedux";
import {useDispatch} from 'react-redux';
import { products } from './../data';
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
`;
const ImgContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-weight: 200;
  font-size: 10vh;
  margin: 20px 0px;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FilterColor = styled.div<{ color: string; isSelected: Boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  border: ${(props) => (props.isSelected ? "3px solid black" : "none")};
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 100;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 3px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 1000;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  padding: 5px;
  font-weight: 900;
  font-size: 15px;
  border: 2px solid teal;
  color: teal;
  background-color: white;
  &:hover {
    background-color: teal;
    color: white;
  }
  cursor: pointer;
`;
const Icon = styled.button<{ color: string }>`
  border-radius: 50%;
  margin: 0px 10px;
  padding: 3px;
  background-color: ${(props) => props.color};
  border: none;
  cursor: pointer;
  &:focus {
    border: solid 2px black;
  }
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
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
const ProductPage = () => {
  const location = useLocation();
  const [Product, setProduct] = useState({} as any);
  // console.log(location.pathname.split('/')[2]);
  const pid = location.pathname.split("/")[2];
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products/find/${pid}`
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [location]);
  console.log(Product.color);
  let uniqueProds;
  if (Product.color) {
    uniqueProds = new Set(Product.color);
    Product.color = [...uniqueProds];
  } else uniqueProds = null;
  const [num, setNum] = useState(0);
  const [selected, setSelected] = useState(-1);
  const [cartOutput,setCartOutput]=useState({quantity:0} as any);
  console.log('cart',cartOutput);
  const dispatch=useDispatch(); 
  useEffect(()=>window.scrollTo(0,0));
  return (
    <Container>
      <NavWrap>
        <Announcements/>
        <NavBar/>
        </NavWrap>
      <Wrapper>
        <ImgContainer>
          <Image src="" />
        </ImgContainer>
        <InfoContainer>
          <Title>{Product.title}</Title>
          <Desc>
            {/* use Product.prod_desc later */}
            {Product.desc}
          </Desc>
          <Price>Rs. {Product.price}</Price>

          <FilterContainer>
            {Product.color ? (
              <Filter>
                <FilterTitle>Color</FilterTitle>
                {
                  Product.color.map((item: any, index: any) =>
                    index === selected ? (
                      <FilterColor
                        color={item}
                        isSelected={true}
                        onClick={() => {
                          setSelected(index);
                          setCartOutput({...cartOutput,color:{item}});
                        }}
                      />
                    ) : (
                      <FilterColor
                        color={item}
                        isSelected={false}
                        onClick={() => {
                          setSelected(index);
                          setCartOutput({...cartOutput,color:item});
                          console.log(cartOutput);
                        }}
                      />
                    )
                  )
                }
                {/* <FilterColor color="black" />
                <FilterColor color="blue" /> */}
              </Filter>
            ) : (
              <></>
            )}
            {Product.size ? (
              <Filter>
                <FilterTitle> Size</FilterTitle>
                <FilterSize onChange={(e)=>{
                  const size=e.target.value;
                  setCartOutput({...cartOutput,size:size});
                }}>
                  {Product.size.map((item: any) => (
                    <FilterSizeOption key={item}>{item}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            ) : (
              <></>
            )}
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <IconContainer>
                <Icon color="darkred">
                  {" "}
                  <RemoveIcon
                    style={{ color: "white" }}
                    onClick={() =>{
                      num > 0 ? setNum(num- 1) : 0;
                      setCartOutput({...cartOutput,quantity:Math.min(num-1,0)});
                      // console.log(cartOutput);
                    }
                    }
                  />
                </Icon>
                <Amount>{num}</Amount>
                <Icon color="teal">
                  <AddIcon
                    style={{ color: "white" }}
                    onClick={() =>{
                      setNum(num + 1);
                      setCartOutput({...cartOutput,quantity:num+1});
                      // console.log(cartOutput);
                    }
                    }
                  />{" "}
                </Icon>
              </IconContainer>
            </AmountContainer>
            <Button onClick={()=>{
              const verifyCart=(cartOutput:any)=>{
                if(!cartOutput.quantity) return <p>Please choose a quantity greater than 0</p>;
                else if(cartOutput.quantity<=0) return <p>Pleace choose a quantity greater than 0</p>;
                // write further logic for color and size if they exist in product
              } 
              // verifyCart(cartOutput);
              console.log("sup",addProduct({...Product,...cartOutput}));
              dispatch(addProduct({...Product,...cartOutput}));
            }}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>  
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductPage;
