import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../Assets/GIF/Cart.gif'
import Home from './Home'
import "../App.css"


function Navbar() {
    return (
        <div>
            <nav className='flex justify-between items-center w-[92%] top-5 mx-auto text-black'>
                <div className='p-4 flex'>
                    <h1 className='relative top-4 font-extrabold font-mono text-xl'>E-CART</h1>
                    <img src={cart} alt="Your SVG" height={'50px'} width={'50px'} className=' m-2' />
                </div>
                <div className='text-center ' >
                    <ul className='flex item-center p-4 list' >
                        <li className=''>
                            <Link to="/" className='pl-6 pr-8 hover:text-blue-500/50'>Home</Link>
                        </li>
                        <li className=''>
                            <Link to="/Product" className='pl-6 pr-8 hover:text-blue-500/50'>Product</Link>
                        </li>
                        <li className=''>
                            <Link to="/Whislist" className='pl-6 pr-8 hover:text-blue-500/50'>Whishlist</Link>
                        </li>
                        <li className=''>
                            <Link to="/Cart" className='pl-6 pr-8 hover:text-blue-500/50'>Cart</Link>
                        </li>
                        <li className=''>
                            <Link to="/Login" className='pl-6 pr-8 hover:text-blue-500/50'>Login</Link>
                        </li>
                    </ul>
                </div>
                <div >
                    <button className=' text-white  py-2 ring-2 ring-blue-500/50 bg-[#99e6ff] rounded-full hover:bg-purple-500 px-3 relative top-1 m-1	'>Contact Us</button>
                </div>
                <div class='hamburger-menu' className=' text-black text-lg'>
               <button  className='menu'> <i class="fa fa-bars" aria-hidden="true"></i></button>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
