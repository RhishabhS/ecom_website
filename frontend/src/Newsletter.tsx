import SendIcon from '@mui/icons-material/Send';
import { styled } from 'styled-components';
const Container=styled.div`
    height:60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title=styled.h1`
    font-size: 90px;
`
const Description=styled.p`
    font-size: 30px;
`
const Input=styled.input`
    border:none;
    flex:8;
`
const InputContainer=styled.div`
    display: flex;
    width:50%;
    height:40px;
    justify-content: space-between;
    border: 1px solid lightcoral

`
const Button=styled.button`
    flex:0.5;
    border:none;
    background-color: teal;
    color:white;
`
const Newsletter = () => {
  return (
    <Container>
        <Title>
            Newsletter
        </Title>
        <Description>
            Get timely updates from your favorite products
        </Description>
        <InputContainer>
            <Input placeholder='Your Email'>

            </Input>
            <Button>
                <SendIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter