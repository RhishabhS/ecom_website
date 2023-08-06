import { styled } from "styled-components"

const Container=styled.div`
    height:30px;
    background-color: teal;
    color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
`
const Announcements = () => {
  return (
    <div>
        <Container>
            SUMMER SALE! Use coupon code RHISH23 to get 20% off on select products!
        </Container>
    </div>
  )
}

export default Announcements