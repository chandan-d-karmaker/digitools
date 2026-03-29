import React from 'react';
import Logo from '../assets/DigiTools.svg';
import { LuShoppingCart } from "react-icons/lu";

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <img src={Logo} alt="Logo" />
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
                <div className="navbar-end">
                    <a className='btn btn-ghost'><LuShoppingCart /></a>
                    <a className='btn btn-ghost'> Login</a>
                    <a className="btn btn-primary rounded-full font-semibold">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;