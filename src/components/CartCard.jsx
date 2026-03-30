import React from 'react';
import { MdDeleteOutline } from "react-icons/md";

const CartCard = ({ item, handleDeleteItem }) => {
    return (
        <div>

            <div className='flex justify-between items-center p-4 rounded-2xl  bg-[#F9FAFC]'>
                <div className='flex gap-5 justify-center items-center'>
                    <div className='border border-gray-300 p-2 rounded-full'>
                        <img className='' src={item.icon} alt="" />
                    </div>
                    <div className='flex flex-col items-start justify-center space-x-4'>
                        <h3 className='text-xl font-semibold'>{item.name}</h3>
                        <h3>${item.price}</h3>
                    </div>
                </div>
                <button className='btn btn-ghost font-bold text-[#FF3980]' onClick={() => handleDeleteItem(item)}>Remove</button>
            </div>

            <div>

                

            </div>

        </div>




    );
};

export default CartCard;