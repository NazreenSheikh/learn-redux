import React from 'react'
import { useState, useEffect } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      await fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setProducts(data)
        })
    }
    fetchProducts()
  }, [])
  return <div>Products</div>
}

export default Products
