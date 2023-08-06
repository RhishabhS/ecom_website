import {useRouteError} from "react-router-dom"
import { styled } from 'styled-components';
const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: darkred;
    height:97.5vh;
    width:99vw;
`
const Title=styled.h1`
    font-size:40px;
    font-weight: 600;
    color:white;
`
const Desc=styled.p`
    font-size:20px;
    font-weight: 300;
    color:white
    
`
const ErrorPage = () => {
    const error:any=useRouteError();
    console.log(error);
  return (
    <Container>
        <Title>We have an error!</Title>
        <Desc>{error.data} error</Desc>
    </Container>
  )
}

export default ErrorPage;