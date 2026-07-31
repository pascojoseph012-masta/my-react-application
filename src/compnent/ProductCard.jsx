import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
      <section className='p-5'>
        <div className='w-70 h-70 bg-slate-800 shadow-2xl opacity-200 rounded-t-xl'>
            <img src={product.image } className=' rounded-t-sm' />
        ` <div className='w-70 h-40 bg-slate-600 position relative bottom-9 flex flex-col gap-5 '>
            <p className='text-white text-md font-bold mx-2 '>{product.name}</p>
            <div className='w-19 rounded-md font text-white h-7 bg-cyan-400 opacity-10.2 mx-2 flex items-center justify-center'><h1 className='flex items-center justify-center'>{product.category}</h1></div>
            <div className='pb-5'><p className='text-sm text-gray-300 mx-2 font-semibold '>{product.description}</p></div>
          </div>
      </div>
        
      

      </section>
      
    </div>
  )
}

export default ProductCard
