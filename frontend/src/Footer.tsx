import React from 'react'
import { styled } from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Container= styled.div`
    display:flex;
    background-color: black;
`
const Left=styled.div`
    flex:1;
    display:flex;
    padding:30px;
    flex-direction: column;
    color:white;
`
const Right =styled.div`
    flex:1;
    padding:30px;
    color:white;
`
const Center=styled.div`
    flex:1;
    padding: 30px;
    color:white;

`
const SocialIcon=styled.button<{color:string}>`
    border:none;
    cursor:pointer;
    width:40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: ${props=>props.color};
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`
const SocialContainer=styled.div`
    display:flex;
`
const Desc=styled.p`
    flex:1;
    margin:20px 0px;
`
const Logo=styled.h1`
border:none;
flex:0.2;
font-size: 50px;
font-weight: 300;
`
const Title=styled.h3`
    margin-bottom: 30px;

`
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display:flex;
    flex-wrap: wrap;

`
const ListItem=styled.li`
    width:50%;
    margin-bottom: 10px;
`
const ContactItem=styled.p`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment=styled.img`
    width:50%;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                RS
            </Logo>
            <Desc>
                Follow us on:
            </Desc>
            <SocialContainer>
                <SocialIcon color="blue">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="indigo">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="blue">
                    <LinkedInIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title> Useful links</Title>
            <List>
            <ListItem>Home</ListItem>
            <ListItem>Products</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <RoomIcon style={{marginRight:"10px"}}/> XXXXXXXXXX XXXXXX XXXXX
            </ContactItem>
            <ContactItem>
                <LocalPhoneIcon style={{marginRight:"10px"}}/> +CC XXXXXXXXXXX
            </ContactItem>
            <ContactItem>
                <MailOutlineIcon style={{marginRight:"10px"}}/> xx@xx.xxx
            </ContactItem>
           <Payment src=""/>

        </Right>
    </Container>
  )
}

export default Footer