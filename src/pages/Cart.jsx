import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const select = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }

  return (
    <div>
      <h1>My Cart</h1>
      <div className="cartWrapper">
        {select.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>${product.price}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
