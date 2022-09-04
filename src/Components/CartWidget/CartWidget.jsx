import React, { useContext } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { cartContext } from '../../Context/CartContext'

const CartWidget = () => {
  const { getQtyProducts } = useContext(cartContext);
  
  return (

    <button>
        <FaShoppingCart className='text-white' size={30} />
        <p>{getQtyProducts}</p>
    </button>
  )
}

export default CartWidget