import { useRouter } from 'next/router'
import React from 'react'

const ReviewDetails = () => {
    const router=useRouter()
    const {productid, reviewid}=router.query
  
  return (
    <div><h1>{reviewid} Review For {productid} Product</h1></div>
  )
}

export default ReviewDetails