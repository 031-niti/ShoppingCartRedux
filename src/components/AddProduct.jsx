import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/products/actions'

const AddProduct = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit,reset,formState: { errors },} = useForm();
    const onSubmit = (data) => {
        dispatch(addProduct(data));
        reset();
    }
    return (
        <div className='py-4 max-w-7xl mx-auto rounded-xl shadow-xl border '>
            <h1 className='text-4xl text-center font-bold '>Add New Product</h1>
            <div className="card card-body justify-center items-center py-4 ">
                <div className="mx-auto w-full max-w-sm"> 
                    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Product name</label>
                            <input name="name" type="text" className="block w-full rounded-lg border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:border-none" 
                                {...register("name", { required: true })} />
                            {errors.name && <span className='text-red-600 font-semibold'>This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                            <select {...register("category")} className='addProduct block w-full rounded-lg border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:border-none'>
                                <option value="">Select a Category</option>
                                <option value="clothing">Clothing</option>
                                <option value="gadgets">Gadgets</option>
                                <option value="bags">Bags</option>
                            </select>
                            {errors.category && <span className='text-red-600 font-semibold'>This field is required</span>}
                        </div>
                        <div>
                            <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">Image URL</label>
                            <input name="image" type="text" className="block w-full rounded-lg border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:border-none" 
                                {...register("image", { required: true })}/>
                            {errors.image && <span className='text-red-600 font-semibold'>This field is required</span>}
                        </div>
                        <div className='flex space-x-2'>
                            <div>
                                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                                <input name="price" type="number" className="block w-full rounded-lg border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:border-none" 
                                    {...register("price", { required: true })}/>
                                {errors.price && <span className='text-red-600 font-semibold'>This field is required</span>}
                            </div>
                            <div>
                                <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
                                <input name="quantity" type="number" className="block w-full rounded-lg border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:border-none" 
                                    {...register("quantity", { required: true })}/>
                                {errors.quantity && <span className='text-red-600 font-semibold'>This field is required</span>}
                            </div>
                        </div>
                        <div className='join flex justify-center items-center'>
                            <button className="btn btn-warning mx-1.5 w-32 hover:bg-yellow-500 hover:text-base-100 border-none" >Add</button>
                            <button className="btn btn-error mx-1.5 w-32 hover:bg-rose-500 hover:text-base-100 border-none" >Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct