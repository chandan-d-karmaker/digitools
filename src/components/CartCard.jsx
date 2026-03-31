import React from 'react';
import { MdDeleteOutline } from "react-icons/md";

const CartCard = ({ item, handleDeleteItem }) => {
    return (
        <div>

            <div className='flex justify-between items-center md:p-4 p-2 rounded-2xl bg-[#F9FAFC]'>
                <div className='flex gap-2 justify-center items-center'>
                    <div className='border border-gray-300 md:p-3 p-2 rounded-full'>
                        <img src={item.icon} alt="" />
                    </div>
                    <div className='flex flex-col items-start justify-center md:space-x-4'>
                        <h3 className='md:text-xl text-sm font-semibold'>{item.name}</h3>
                        <h3 className='text-[#627382] font-medium'>${item.price}</h3>
                    </div>
                </div>
                <button className='btn btn-ghost btn-sm md:btn-md font-bold text-[#FF3980]' onClick={() => handleDeleteItem(item)}>Remove</button>
            </div>

        </div>




    );
};

export default CartCard;