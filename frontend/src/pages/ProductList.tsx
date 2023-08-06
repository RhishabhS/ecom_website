import { styled } from 'styled-components'
import NavBar from './NavBar'
import Announcements from '../Announcements'
import Products from '../Products'
import Newsletter from '../Newsletter'
import Footer from '../Footer'
import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react'
const Container=styled.div`
    
`
const Title=styled.h1`
    margin: 20px;
    
`
const FilterContainer=styled.div`
    display:flex;
    justify-content: space-between;
    margin: 20px;   
`
const Filter=styled.div`
    
`
const FilterText=styled.span`
    font-size: 20px;
    font-weight: 600;
    `
const Select=styled.select`
    padding:3px;
    margin-left: 10px;
`
const Option=styled.option`
    
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
const ProductList = () => {
  const location=useLocation();
//   console.log(location.pathname.split('/')[2]); 
  const [filters, setFilters]=useState({});
  const [sort, setSort]=useState('newest');
//   console.log(filters);
// console.log(sort);       
  const handleFilters=(e:any)=>{
    const value=e.target.value;
    setFilters({
        ...filters,
       [e.target.name]:value,
    })
 
  }
  const handleSort=(e:any)=>{
    setSort(e.target.value);
   } 
//    console.log(location.pathname.split('/')[2]);
useEffect(()=>window.scrollTo(0,0));
  return (
    <Container>
        <NavWrap>
        <Announcements/>
        <NavBar/>
        </NavWrap>
        <Title></Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select onChange={handleFilters} name='color'>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>blue</Option>
                </Select>
                <Select onChange={handleFilters} name='size'>
                <Option disabled selected>
                    Size
                </Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                </Select>
            </Filter>
            <Filter><FilterText>Sort Products</FilterText>
            <Select onChange={handleSort}>
            <Option disabled selected>
                    Sort
                </Option>
                <Option value="asc">By Price (lowest to highest)</Option>
                <Option value="desc">By Price (highest to lowest)</Option>
                <Option value="newest">Newest</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products cat={location.pathname.split('/')[2]} filters={filters} sort={sort} display='all'/>
        <Newsletter/>
        <Footer/>

    </Container>
  )
}

export default ProductList