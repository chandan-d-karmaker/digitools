import React from 'react';
import { FaCheck } from "react-icons/fa";

const PackageCard = ({ pkg }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">

                    <div className="space-y-3">

                        <div className='flex justify-between items-center relative'>
                            <div className='border border-gray-400 rounded-full p-2'>
                                <img src={pkg.icon} alt={pkg.name} />
                            </div>
                            <span className={`badge badge-md absolute -top-3 -right-3 ${pkg.tagType === 'best seller' ? 'badge-primary' : ''} ${pkg.tagType === 'popular' ? 'badge-warning' : ''} ${pkg.tagType === 'new' ? 'badge-info' : ''} `}>{pkg.tag}</span>
                        </div>
                        <h2 className="text-3xl font-bold">{pkg.name}</h2>
                        <p className='text-[#627382]'>{pkg.description}</p>

                        <span className="text-2xl font-bold">${pkg.price}</span><span className="text-[16px] text-[#627382]">/{pkg.period}</span>
                    </div>

                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li className='flex gap-2 items-center'><FaCheck />{pkg.features[0]}</li>
                        <li className='flex gap-2 items-center'><FaCheck />{pkg.features[1]}</li>
                        <li className='flex gap-2 items-center'><FaCheck />{pkg.features[2]}</li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block rounded-3xl">Buy Now</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default PackageCard;