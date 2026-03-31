import React from 'react';
import Logo from '../assets/DigiTools.svg';
import { LuShoppingCart } from "react-icons/lu";

const NavBar = ({ cartItems }) => {
    return (
        <div className='shadow-sm'>
            <div className="navbar bg-base-100">
                <div className="navbar-start flex items-center gap-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a className='font-semibold'>Products</a></li>
                            <li><a className='font-semibold'>Features</a></li>
                            <li><a className='font-semibold'>Pricing</a></li>
                            <li><a className='font-semibold'>Testimonials</a></li>
                            <li><a className='font-semibold'>FAQ</a></li>
                            <li><a className='font-semibold'>Login</a></li>
                        </ul>
                    </div>
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='font-semibold'>Products</a></li>
                        <li><a className='font-semibold'>Features</a></li>
                        <li><a className='font-semibold'>Pricing</a></li>
                        <li><a className='font-semibold'>Testimonials</a></li>
                        <li><a className='font-semibold'>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-1">
                    <a className='btn btn-ghost relative'>
                        <div className="absolute top-0 right-0 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            {cartItems.length}
                        </div>
                        <LuShoppingCart />
                    </a>
                    <a className='btn btn-ghost hidden md:flex'> Login</a>
                    <a className="btn btn-primary rounded-full font-semibold">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;