import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {TiHome} from 'react-icons/ti'

const NavBar = () => {
  return (
    <nav className='flex justify-center items-center bg-black py-2'>
        <div className='flex w-11/12 justify-between items-center'>
            <TiHome className='text-white' size={35} />
            <ul className='flex gap-6 text-white font-semibold'>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Galeria</li>
            </ul>

            <CartWidget />
        </div>
    </nav>
  )
}

export default NavBar