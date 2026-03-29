import React from 'react';
import { RiShoppingCart2Line } from "react-icons/ri";

const Cart = () => {
    return (
        <div className='w-4/5 mx-auto shadow-sm p-5 rounded-lg space-y-10'>
            <h2 className='text-3xl font-bold'>Your Cart</h2>
            <div className='text-center p-5'>
                <span className='text-5xl flex items-center justify-center mb-5 opacity-50'><RiShoppingCart2Line /></span>
                <h3 className='text-4xl font-bold mb-5'>No items in your cart</h3>
                <p className='text-sm font-medium opacity-70'>Add some items to your cart to see them here.</p>
            </div>
            
        </div>
    );
};

export default Cart;