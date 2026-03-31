import React, { use } from 'react';
import PriceCard from './PriceCard';

const Pricing = ({ pricesPromise }) => {

    const priceData = use(pricesPromise);
    console.log(priceData);
    return (
        <div className='py-28 w-4/5 mx-auto'>

            <div className='text-center mb-10'>
                <h1 className='md:text-5xl text-4xl font-extrabold mb-4 text-[#101727]'>Simple, Transparent Pricing</h1>
                <p className='text-[16px] text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    priceData.map((price) => <PriceCard key={price.id} price={price} />)
                }

            </div>
            
        </div>
    );
};

export default Pricing;