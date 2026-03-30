import React from 'react';
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import CartCard from './CartCard';

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
                        <h3 className='text-4xl font-bold mb-5 opacity-50'>No items in your cart</h3>
                        <p className='text-sm font-medium opacity-70'>Add some items to your cart to see them here.</p>
                    </div>

                </div> : 
                <div className='mb-5 p-10 shadow-sm rounded-lg w-4/5 mx-auto space-y-5 border-2 border-[#F2F2F2]'>

                    <h2 className='text-3xl font-bold'>Your Cart</h2>
                    {
                        cartItems.map(item => <CartCard key={item.id} item={item} handleDeleteItem={handleDeleteItem} />)
                    }

                    <div className='flex justify-between items-center'>
                        <p className='text-[16px] text-[#627382] '>Total:</p>
                        <p className='text-2xl font-bold'>${cartItems.reduce((total, item) => total + (item.price), 0)}</p>
                    </div>

                    <button className='btn btn-primary w-full rounded-3xl'>Proceed to Checkout</button>

                </div>


            }
        </div>
    );
};

export default Cart;