import React, { use } from 'react';
import PackageCard from './PackageCard';

const DisplayCards = ({ packagePromise, cartItems, setCartItems }) => {

    const packageData = use(packagePromise);
    return (
        <div className='lg:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {/* display cards */}
            
                {
                    packageData.map(pkg => <PackageCard key={pkg.id} pkg={pkg} cartItems={cartItems} setCartItems={setCartItems} />)
                }
            
        </div>
    );
};

export default DisplayCards;