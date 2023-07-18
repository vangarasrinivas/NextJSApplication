import { useRouter } from 'next/router'
import React from 'react'

const ProductDetails = () => {

    const router=useRouter()
    const productId=router.query.productid
  return (
    <div><h1>{productId} Product Details</h1></div>
  )
}

export default ProductDetails