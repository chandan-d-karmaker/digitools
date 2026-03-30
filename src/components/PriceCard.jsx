import React from 'react';
import { FaCheck } from "react-icons/fa";

const PriceCard = ({ price }) => {
    return (
        <div>
            <div className={"card " + (price.isFeatured ? "bg-blue-600 text-white" : "bg-base-100 shadow-sm relative")}>
                <div className={`card-body `}>

                    {price.isFeatured && (
                        <span className="badge badge-md absolute -top-2 left-1/2 -translate-x-13 bg-[#FEF3C6] text-[#BB4D00]">{ price.tag }</span>
                    )}

                    <div className="">
                        <h2 className="text-3xl font-bold mb-2">{price.name}</h2>
                        <p className={"text-[16px] mb-6 " + (price.isFeatured ? "text-white" : "text-[#627382] ")}>{price.description}</p>
                        <div>
                            <span className="text-2xl font-bold">${price.price}</span><span className={'text-[16px] ' + (price.isFeatured ? "text-white" : "text-[#627382]")}>/month</span>
                        </div>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li className='flex gap-2'><FaCheck />{price.features[0]}</li>
                        <li className='flex gap-2'><FaCheck />{price.features[1]}</li>
                        <li className='flex gap-2'><FaCheck />{price.features[2]}</li>
                        <li className='flex gap-2'><FaCheck />{price.features[3]}</li>
                        <li className='flex gap-2'><FaCheck />{price.features[4]}</li>
                    </ul>
                    <div className="mt-6">
                        <button className={"btn btn-primary btn-block rounded-3xl " + (price.isFeatured ? "bg-white text-blue-600" : "")}>
                            {price.buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceCard;