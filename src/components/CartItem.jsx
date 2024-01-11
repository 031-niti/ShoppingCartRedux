import React from 'react'
import { useDispatch } from 'react-redux';
import { IoClose } from "react-icons/io5";
import { removeToCart, increaseQuantity, decreaseQuantity } from '../redux/Carts/actions'
import { addQuantity, removeQuantity } from '../redux/products/actions'

const CartItem = ({ product }) => {
    const dispatch = useDispatch();
    const { id, name, image, category, price, quantity, productId } = product;
    const handleRemoveToCart = () => {
        dispatch(removeToCart(id))
        dispatch(addQuantity(productId, quantity))
    }
    if (quantity === 0) {
        handleRemoveToCart();
    }
    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity(id))
        dispatch(removeQuantity(productId))
    }
    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity(id))
        dispatch(addQuantity(productId, 1))
    }
    return (
        <div>
            <div className="rounded-sm ">
                <div className="justify-between mb-6 rounded-lg bg-base-200 shadow-md sm:flex sm:justify-start p-2">
                    <img src={image} alt={`${name}`} className="w-full m-2 h-36 rounded-lg sm:w-56 object-cover" />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:my-0 flex flex-col justify-center ">
                            <h3 className="text-lg font-bold ">
                                {name}
                            </h3>
                            <p className='mt-1 text-sm '>
                                Price: {price}฿
                            </p>
                            <p className='mt-1 text-sm '>
                                Category: {category}
                            </p>
                        </div>
                        <div className='mt-4 justify-between sm:space-y-8 sm:mt-1 sm:block sm:space-x-9'>
                            <div className="flex items-center border-base-200 ">
                                <span className='cursor-pointer rounded-l bg-base-300 py-1 px-3.5 duration-100 hover:bg-blue-600 hover:text-base-100'
                                    onClick={handleDecreaseQuantity} >
                                    {""}
                                    -{""}
                                </span>
                                <input type="text" min="1" value={quantity} className='h-8 w-10 bg-base-100 text-center  ' />
                                <span className='cursor-pointer rounded-r bg-base-300 py-1 px-3.5 duration-100 hover:bg-blue-600 hover:text-base-100'
                                    onClick={handleIncreaseQuantity} >
                                    {""}
                                    +{""}
                                </span>
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='text-lg text-rose-600'>
                                    {price * quantity}฿
                                </p>
                                <button className='lws-removeToCart btn btn-circle flex items-center'
                                    onClick={handleRemoveToCart}>
                                    <IoClose />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem