import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import Bill from '../components/Bill';

const MyCart = () => {
  const carts = useSelector((state) => state.carts);
  return (
    <main className='py-8 max-w-7xl mx-auto px-4'>
      <div className='grid sm:grid-cols-3 grid-cols-1 gap-8'>
        <div className='col-span-2'>
          <div className='grid gap-y-2 grid-cols-1'>
            {carts.length ?
              (
                carts.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))
              ) :
              (
                <div className='text-2xl text-center mt-[40vh]'>No Product in Carts!!</div>
              )}
          </div>
        </div>
        <div>
          <Bill />
        </div>
      </div>
    </main>
  )
}

export default MyCart