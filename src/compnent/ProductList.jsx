import React, { useEffect, useState } from 'react'
import { InitialProduct } from '../assets/Data';
import ProductCard from './ProductCard';
const ProductList = () => {
    const [Products, setProducts] = useState ([]);
    useEffect(()=>{setProducts(InitialProduct)},[])
  return (
    <div>
       <div className='grid grid-cols-4 '>
            {Products.map((product)=>(<ProductCard product={product}/>))}
          </div>
        
    </div>
  )
}

export default ProductList