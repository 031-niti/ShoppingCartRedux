import React from 'react'
import { useDispatch, useSelector} from 'react-redux'

const Navbar = () => {
    const carts = useSelector((state) => state.carts);
    const cartitemNo = carts.reduce((total, product) => 
        total + product.quantity, 0
    );
    const dispatch = useDispatch();
    const handlePageChange = (type) =>{
        dispatch({type})
    }
    return (
        <div className='bg-base-300'>
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl">ShoppingCart</a>
                </div>
                <div className="flex-none">
                    <div className='dropdown dropdown-end'>
                        <button className='btn btn-ghost font-semibold text-xl' 
                        onClick={()=>handlePageChange("HOME")}>Home</button>
                    </div>
                    <div className="dropdown dropdown-end mx-3">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" 
                        onClick={()=>handlePageChange("CART")}>
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item ">{cartitemNo}</span>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge ">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar