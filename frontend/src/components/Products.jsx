import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat, filters, sort}) => {

  const [products, setproducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  
  useEffect(() => {
    const getProducts = async () =>{
      try {
        const res = await axios.get('http://localhost:5000/api/products' + cat ? cat : "")
        setproducts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  
    
  }, [cat])

  useEffect(() => {
    cat && 
      setfilteredProducts( 
        products.filter((item) => 
          Object.entries(filters).every(([key, value]) => 
            item[key].includes(value) 
          )
        )
      )  
  
  },[products, cat, filters])
  
  


  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products