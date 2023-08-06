import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
// import { ImpProducts } from "./data";
import Product from "./Product";
import axios from "axios";
// import { useState } from 'react';
const Container = styled.div`
  padding: 20px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
`;

const Wrapper=styled.div`
  padding: 20px;
  flex-wrap: wrap;
  display: flex;
`

const Products = ({ cat, filters, sort, display }: any) => {
  const [products, setProducts] = useState([] as any);
  const [filteredProducts, setfilteredProducts] = useState([]);
  console.log(cat);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?cat=${cat}`
            : `http://localhost:5000/api/products`
        );
        setProducts(res.data); 
 
      } catch (err) {}
    };
    getProducts();
  }, [cat]);
  useEffect(() => {
      if(cat){
      setfilteredProducts(
        products.filter((item:any):any =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
      }
      else if(display=='home'){
        setfilteredProducts(products.sort((a:any,b:any)=>a.createdAt-b.createdAt));
      }
      else{
        setfilteredProducts(products);
      }
    
  }, [products, cat, filters]); 

  useEffect(()=>{
    if(sort==="newest"){
        setfilteredProducts(prev=>[...prev].sort((a:any,b:any)=>a.createdAt-b.createdAt))
    }else if(sort==="asc"){
        setfilteredProducts(prev=>[...prev].sort((a:any,b:any)=>a.price-b.price));
    }else{
      setfilteredProducts(prev=>[...prev].sort((a:any,b:any)=>b.price-a.price));
    }
  },[sort]);  

  let header;
  if(cat) header=cat;
  else header='';
  try{
    if(header.length>=2) header=header.charAt(0).toUpperCase()+header.slice(1);
  }catch(err){
    console.log(err)
  }
  if(filteredProducts.length==0) header="No Products Found!";
  return (
    <Container>
      {display=='all'?<h1 style={{marginLeft:"20px"}}>{header}</h1>:<h1 style={{marginLeft:"20px"}}>Browse our latest collections</h1>}
      <Wrapper>
      {display=='all'? filteredProducts.map((item:any):any => (
        <Product item={item} key={item.id} />
      )):filteredProducts.slice(0,Math.min(filteredProducts.length,4)).map((item:any):any => (
        <Product item={item} key={item.id} />
      ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
