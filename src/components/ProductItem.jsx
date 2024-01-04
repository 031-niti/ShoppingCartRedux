import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Carts/actions'
import { removeQuantity } from '../redux/products/actions'

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, image, name, category, price, quantity } = product;
  const hanldleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(removeQuantity(id));
  }
  return (
    <div className='card drop-shadow-md md:w-96 bg-base-100 shadow-xl'>
      <figure className='relative'>
        <img src={`${image}`} alt={`${name}`} className='h-80 w-full' />
        <div className='badge badge-base-100 capitalize  absolute top-3 right-3'>
          {category}
        </div>
      </figure>
      <div className='card-body'>
        <h2 className='card-title '>{name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam culpa labore, commodi odit alias in saepe quod
          corrupti minus eos quo consequatur sapiente, quibusdam nostrum explicabo architecto quaerat optio! Harum.</p>
      </div>
      <div className='flex justify-between px-6'>
        <p className='w-full'>Available" {quantity}</p>
        <p className='text-lg'>{price}฿</p>
      </div>
      <div className='card-actions my-4 container mx-auto justify-center '>
        <button className='btn btn-primary w-36 text-base-100 animate-bounce' disabled={quantity === 0} onClick={hanldleAddToCart}>Buy</button>
      </div>
    </div>
  )
}

export default ProductItem;