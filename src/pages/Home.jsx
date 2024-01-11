import React from 'react'
import AddProduct from '../components/AddProduct'
import { useSelector } from 'react-redux'
import ProductItem from '../components/ProductItem'

const Home = () => {
    const products = useSelector((state) => state.products);
    return (
        <main className='py-8 max-w-7xl mx-auto px-4'>
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-8'>
                <div className='col-span-2 '>
                    <div className='grid md:grid-cols-2 gap-y-10 grid-cols-1'>
                        {products.length ? (
                            products.map((product) => (
                                <ProductItem key={product.id} product={product} />
                            ))
                        ) : (
                            <div className='text-2xl text-center mt-[40vh]'>No Product!!</div>
                        )}
                    </div>
                </div>
                <div>
                    <AddProduct />
                </div>
            </div>
        </main>
    )
}

export default Home