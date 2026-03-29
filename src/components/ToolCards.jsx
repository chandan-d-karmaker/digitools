import React from 'react';

const ToolCards = () => {
    return (
        <div className='py-28 w-4/5 mx-auto'>

            {/* title */}
            <div className=''>
                <h2 className="text-3xl font-bold text-center mb-4">Premium Digital Tools</h2>
                <p className='text-[#627382] text-[16px] text-center mb-4'>Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.</p>

                <div className='flex justify-center'>
                    <div className='rounded-full p-2 border border-[#F6F6F6] inline-flex justify-center'>
                        <button className='btn btn-primary rounded-full'>Products</button>
                        <button className='btn bg-base-100 border-0 rounded-full'>Cart (0)</button>
                    </div>
                </div>
            </div>

            {/* display cards */}
            <div>
                
            </div>
        </div>
    );
};

export default ToolCards;