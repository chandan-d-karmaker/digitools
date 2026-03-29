import React from 'react';
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";

const Cart = ({ cartItems, setCartItems }) => {

    const handleDeleteItem = (item) => {
        const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(updatedCartItems);
    }


    return (
        <div>
            {
                cartItems.length === 0 ? <div className='w-4/5 mx-auto shadow-sm p-5 rounded-lg space-y-10'>
                    <h2 className='text-3xl font-bold'>Your Cart</h2>
                    <div className='text-center p-5'>
                        <span className='text-5xl flex items-center justify-center mb-5 opacity-50'><RiShoppingCart2Line /></span>
                        <h3 className='text-4xl font-bold mb-5'>No items in your cart</h3>
                        <p className='text-sm font-medium opacity-70'>Add some items to your cart to see them here.</p>
                    </div>

                </div> : cartItems.map(item =>
                    <div className='mb-5 key={item.id}'>
                        <div className='flex justify-between items-center p-4 rounded-2xl border border-gray-300 space-y-5'>
                            <div className='flex gap-5 justify-center items-center'>
                                <div>
                                    <img className='w-20 h-20 rounded-xl' src={item.icon} alt="" />
                                </div>
                                <div className='flex flex-col items-start justify-center space-x-4'>
                                    <h3 className='text-xl font-semibold'>{item.name}</h3>
                                    <h3>${item.price}</h3>
                                </div>
                            </div>
                            <button className='btn btn-ghost' onClick={() => handleDeleteItem(item)}><MdDeleteOutline /></button>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Cart;