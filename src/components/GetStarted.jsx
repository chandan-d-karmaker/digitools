import React from 'react';
import user from '../assets/user.png'
import product from '../assets/package.png'
import rocket from '../assets/rocket.png'

const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC] py-28'>

            <div className='w-4/5 mx-auto'>
                <div className='space-y-10 mb-10'>
                    <h1 className='text-4xl font-bold text-center mb-4'>Get Started in 3 Steps</h1>
                    <p className='text-[16px] text-center text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                    <div className='bg-base-100 px-6 py-20 flex flex-col items-center text-center rounded-2xl relative'>
                        <div className='px-3 py-2 bg-blue-500 text-white text-sm font-bold rounded-full absolute top-5 right-5'>01</div>
                        <div className='bg-[#F9FAFC] p-5 rounded-full inline-flex'><img src={user} alt="" /></div>
                        <h1 className='text-xl font-bold mt-4'>Create Account</h1>
                        <p className='text-[16px] text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='bg-base-100 px-6 py-20  flex flex-col items-center text-center rounded-2xl relative'>
                        <div className='px-3 py-2 bg-blue-500 text-white text-sm font-bold rounded-full absolute top-5 right-5'>02</div>
                        <div className='bg-[#F9FAFC] p-5 rounded-full inline-flex'><img src={product} alt="" /></div>
                        <h1 className='text-xl font-bold mt-4'>Choose Products </h1>
                        <p className='text-[16px] text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='bg-base-100 px-6 py-20 flex flex-col items-center text-center rounded-2xl relative'>
                        <div className='px-3 py-2 bg-blue-500 text-white text-sm font-bold rounded-full absolute top-5 right-5'>03</div>
                        <div className='bg-[#F9FAFC] p-5 rounded-full inline-flex'><img src={rocket} alt="" /></div>
                        <h1 className='text-xl font-bold mt-4'>Start Creating</h1>
                        <p className='text-[16px] text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default GetStarted;