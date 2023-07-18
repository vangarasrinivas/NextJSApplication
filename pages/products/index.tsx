import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'

const Products = () => {

    const productId=100
  return (
    <>
    <Navbar />
    <div>
        <Link href="/products/1"><h1>Product 1</h1></Link>
        <Link href="/products/2"><h1>Product 2</h1></Link>
        <Link href="/products/3"><h1>Product 3</h1></Link>
        <Link href="/products/4" replace><h1>Product 4</h1></Link>
        <Link href={`/products/${productId}`}><h1>Product {productId}</h1></Link>
         
    </div>
    </>
  )
}

export default Products