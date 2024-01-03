import React from 'react'
import AddProduct from './AddProduct'
import { useSelector } from 'react-redux'

const Home = () => {
    const products = useSelector((state)=>state.products);
    
    return (
        <main className='py-8 max-w-7xl mx-auto px-4'>
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-8'>
                <div className='col-span-2'>
                    <div className='grid md:grid-cols-2 gap-y-10 grid-cols-1'>
                        <div className="drop-shadow-md m-4 ">
                            <div className="card w-[20rem] bg-base-100 pb-4 mb-7 shadow-lg hover:shadow-xl duration-300 hover:scale-105 border ">
                                <figure >
                                    <img src="https://plus.unsplash.com/premium_photo-1698429260304-56c5a60f419b?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
                                </figure>
                                <div className="card-body p-[1.5rem] ">
                                    <h3 className="card-title mt-4 text-sm text-gray-700 font-semibold ">2024</h3>
                                    <div className="card-actions justify-between items-center my-1">
                                        <span className="text-sm">month</span>
                                        <span className=" text-base text-red-600">฿100</span>
                                    </div>
                                    <div className='join justify-center'>
                                        <a className="btn btn-warning mx-1 w-32 hover:bg-yellow-500 hover:text-base-100">Edit</a>
                                        <a className="btn btn-error mx-1 w-32 hover:bg-rose-600 hover:text-base-100" >Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="drop-shadow-md m-4 ">
                            <div className="card w-[20rem] bg-base-100 pb-4 mb-7 shadow-lg hover:shadow-xl duration-300 hover:scale-105 border ">
                                <figure >
                                    <img src="https://plus.unsplash.com/premium_photo-1698429260304-56c5a60f419b?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
                                </figure>
                                <div className="card-body p-[1.5rem] ">
                                    <h3 className="card-title mt-4 text-sm text-gray-700 font-semibold ">2024</h3>
                                    <div className="card-actions justify-between items-center my-1">
                                        <span className="text-sm">month</span>
                                        <span className=" text-base text-red-600">฿100</span>
                                    </div>
                                    <div className='join justify-center'>
                                        <a className="btn btn-warning mx-1 w-32 hover:bg-yellow-500 hover:text-base-100">Edit</a>
                                        <a className="btn btn-error mx-1 w-32 hover:bg-rose-600 hover:text-base-100" >Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid items-center'>
                    <AddProduct />
                </div>
            </div>
        </main>
    )
}

export default Home