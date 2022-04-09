import React from 'react'
import { useState, useEffect } from 'react'
import { addToCart } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './Loading'
import { fetchProducts, STATUSES } from '../store/productSlice'

const Products = () => {
  // const [products, setProducts] = useState([])
  const { data: products, status } = useSelector((state) => state.product)
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  const handleAdd = (product) => {
    dispatch(addToCart(product))
  }
  useEffect(() => {
    dispatch(fetchProducts())
    setLoading(false)
    // const fetchProducts = async () => {
    //   await fetch('https://fakestoreapi.com/products')
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data)
    //       setProducts(data)
    //       setLoading(false)
    // }
    // fetchProducts())}
  }, [])

  if (status === STATUSES.LOADING) {
    return <Loading />
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>
  }
  return (
    <div>
      {' '}
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
    </div>
  )
}

export default Products
