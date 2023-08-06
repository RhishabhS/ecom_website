import React from 'react'
import NavBar from './NavBar'
import Announcements from '../Announcements'
import Slider from '../Slider'
import Categories from '../Categories'
import Products from '../Products'
import Newsletter from '../Newsletter'
import Footer from '../Footer'
import { styled } from 'styled-components'
import { useEffect } from 'react';
const Wrapper=styled.div`
  position:sticky;
  top:0;
  width:100%;
  height:100%;
  z-index:5;
  background-color: white;
  opacity:1;
`

const Home = () => {
  useEffect(()=>window.scrollTo(0,0));
  return (
    <div className='test'>
      <Wrapper>
      <Announcements/>
      <NavBar/>
      </Wrapper>
      <Slider/>
      <Categories/>
      <Products display='home'/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home