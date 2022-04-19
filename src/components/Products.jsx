import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { fetchProduct, STATUSES } from '../store/productSlice'

const Products = () => {
  const { data: products, status } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProduct())
    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products')
    //   const data = await res.json()
    //   console.log(data)
    //   setProducts(data)
    // }
    // fetchProducts()
  }, [])
  const handleAdd = (product) => {
    dispatch(add(product))
  }

  if (status === STATUSES.LODING) {
    return <div>loding..........</div>
  }
  if (status === STATUSES.ERROR) {
    return <div>somthing going wrong</div>
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default Products
