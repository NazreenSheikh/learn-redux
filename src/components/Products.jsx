import React from 'react'
import { useState, useEffect } from 'react'
import { addToCart } from '../store/cartSlice'
import { useDispatch } from 'react-redux'
import Loading from './Loading'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  const handleAdd = (product) => {
    dispatch(addToCart(product))
  }
  useEffect(() => {
    const fetchProducts = async () => {
      await fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setProducts(data)
          setLoading(false)
        })
    }
    fetchProducts()
  }, [])
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="productsWrapper">
          {products.map((product) => {
            return (
              <div className="card" key={product.id}>
                <h1>{product.name}</h1>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <p>{product.price} $</p>
                <button onClick={() => handleAdd(product)} className="btn">
                  Add to cart
                </button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Products
