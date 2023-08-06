import { styled } from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SliderItems } from "./data.ts";
import { useState } from 'react';
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: grey;
  position: relative;
  overflow: hidden;
  display: flex;
`;

const Arrow = styled.button<{ direction: string, onClick: ()=>void}>`
  width: 50px;
  height: 50px;
  background-color: #f6f3f3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  position: absolute;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction == "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  border: none;
  cursor: pointer;
  z-index: 2;
`;
const Wrapper = styled.div<{Index:Number}>`
  height: 100%;
  background-color: pink;
  display: flex;
  transition: all 1.5s ease;
  transform:translateX(${props=>Number(props.Index)*-100}vw);
`;
const Slide = styled.div<{ bg: string}>`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};
`;
const Image = styled.img`
  height: 80%;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;



const Slider = () => {
  const [SlideIndex, setSlideIndex] = useState(0);
  const HandleClick = (direction: string) => {
    if(direction==="left") setSlideIndex(SlideIndex>0?SlideIndex-1:SliderItems.length-1)
    if(direction==='right') setSlideIndex(SlideIndex+1<SliderItems.length?SlideIndex+1:0)
  };

  return (
    <Container>
      <Arrow direction="left" onClick={()=>HandleClick('left')}>
        <ArrowLeftIcon></ArrowLeftIcon>
      </Arrow>
      <Wrapper Index={SlideIndex}>
        {SliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.description}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>HandleClick('right')}>
        <ArrowRightIcon></ArrowRightIcon>
      </Arrow>
    </Container>
  );
};

export default Slider;
