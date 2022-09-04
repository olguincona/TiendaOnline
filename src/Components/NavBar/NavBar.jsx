import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {TiHome} from 'react-icons/ti'
import { Link, NavLink } from 'react-router-dom'


const viewport = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight
}

const NavBar = () => {

  const categories = [
    { name: "Electronics", id: 0, route: "/category/electronics" },
    { name: "Jewelery", id: 1, route: "/category/jewelery" },
    { name: "Men's clothing", id: 2, route: "/category/men's clothing" },
    { name: "Women's clothing", id: 3, route: "/category/women's clothing" },
];

  return (
    <header className='flex justify-center items-center bg-black py-2 bg-fixed'>
        <div className='flex w-11/12 justify-between items-center'>
            <Link to="/"><TiHome className='text-white' size={35} /></Link>
            <nav>
              {categories.map((category) => <NavLink className='text-white mx-3 font-bold' key={category.id} to={category.route}>{category.name}</NavLink>)}
            </nav>
            <Link to="/cart"><CartWidget /></Link>
        </div>
    </header>
  )
}

export default NavBar