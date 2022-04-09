import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../store/cartSlice'
const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)
  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId))
  }
  return (
    <div>
      <h1>Cart</h1>
      <div className="cartWrapper">
        {cartItems.map((item) => {
          return (
            <div className="cartCard" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.title}</h3>
              <h5> {item.price}$</h5>
              <button onClick={() => handleRemove(item.id)} className="btn">
                Remove from Cart
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart
