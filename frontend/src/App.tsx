import React from 'react'
import NavBar from './pages/NavBar'
import Announcements from './Announcements'
import Slider from './Slider'
import Categories from './Categories'
import Products from './Products';
import Newsletter from './Newsletter'
import Footer from './Footer';
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import { styled } from 'styled-components'
import {createBrowserRouter} from 'react-router-dom'
const Container=styled.div`
  
`
const App = () => {
  return (
    <Container>
      <Home/>
    </Container>
    
  )
}

export default App