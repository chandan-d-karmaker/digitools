import React from 'react';

const Info = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-14'>
            <div className='flex flex-col justify-between items-center w-4/5 mx-auto text-white text-center md:flex-row '>
                <div className='mb-5 md:mb-0'>
                    <h2 className='font-bold text-6xl'>50K+</h2>
                    <p className='text-2xl font-medium opacity-80'>Active Users</p>
                </div>
                <div className="divider md:divider-horizontal md:divider-neutral"></div>
                <div className='mb-5 md:mb-0'>
                    <h2 className='font-bold text-6xl'>200+</h2>
                    <p className='text-2xl font-medium opacity-80'>Premium Tools</p>
                </div>
                <div className="divider md:divider-horizontal md:divider-neutral"></div>
                <div className='mb-5 md:mb-0'>
                    <h2 className='font-bold text-6xl'>4.9</h2>
                    <p className='text-2xl font-medium  opacity-80'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Info;