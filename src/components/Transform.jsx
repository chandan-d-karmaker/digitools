import React from 'react';

const Transform = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-28'>

            <div className='w-4/5 mx-auto space-y-10'>
                <div>
                    <h2 className='text-4xl font-bold text-white text-center mb-6'>Ready to Transform Your Workflow?</h2>
                    <p className='text-white text-center opacity-90'>Join thousands of professionals who are already using Digitools to work smarter. <br />
                        Start your free trial today.</p>
                </div>
                <div>
                    <div className='flex gap-4 justify-center mb-4'>
                        <button className='btn rounded-3xl bg-base-100 text-blue-600 shadow-none'>Explore Products</button>
                        <button className='btn rounded-3xl text-white border border-white bg-transparent shadow-none'>View Pricing</button>
                    </div>
                    <p className='text-white text-center opacity-80'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>

        </div>
    );
};

export default Transform;