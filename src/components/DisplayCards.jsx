import React, { use } from 'react';
import PackageCard from './PackageCard';

const DisplayCards = ({ packagePromise }) => {

    const packageData = use(packagePromise);
    return (
        <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-7'>
            {/* display cards */}
            
                {
                    packageData.map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)
                }
            
        </div>
    );
};

export default DisplayCards;