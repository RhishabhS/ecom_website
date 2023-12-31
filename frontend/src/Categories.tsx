import { styled } from "styled-components"
import CategoryItem from "./CategoryItem";
import { categories } from "./data";

const Container=styled.div`
    display:flex;
`
const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem data={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories