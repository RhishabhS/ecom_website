import { styled } from 'styled-components'
import { categories, category } from './data'
import {Link} from 'react-router-dom';
const Container=  styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;

`
const Image=styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
`
const Title=styled.h1`
  color:white;
  margin-bottom: 20px;

`
const Button=styled.button`
  border:none;
  padding:10px;
  background-color:white;
  color:gray;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    transform:scale(1.5);

  }
`
const Info=styled.div`
  position:absolute;
  height:100%;
  width:100%; 
  top:0;
  left:0; 
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`
const CategoryItem = ({data}:any)=>{
  return (
   <Container>
      <Image src={data.img}/>
      <Info>
        <Title>
          {data.title}
        </Title>
        <Button>
          <Link to='/products/women' style={{textDecoration:"none",color:"gray",fontWeight:"500"}}>SHOP NOW  </Link> 
        </Button>
      </Info>
   </Container>
  )
}

export default CategoryItem