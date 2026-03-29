import PackageCard from './PackageCard';
import DisplayCards from './DisplayCards';
import { useState } from 'react';
import Cart from './cart';

const ToolCards = ({packagePromise}) => {

    const [actvBtn, setActvBtn] = useState('products');

    const handleProductTab = () => {
        setActvBtn('products');
    }
    

    const handleCartTab = () => {
        setActvBtn('cart');

    }

    return (
        <div className='py-28 w-4/5 mx-auto'>

            {/* title */}
            <div className=''>
                <h2 className="text-3xl font-bold text-center mb-4">Premium Digital Tools</h2>
                <p className='text-[#627382] text-[16px] text-center mb-4'>Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.</p>

                <div className='flex justify-center mb-10'>
                    <div className='rounded-full p-2 border border-[#F6F6F6] inline-flex justify-center'>
                        <button className={`btn ${actvBtn === 'products' ? 'btn-primary' : 'bg-base-100'} rounded-full shadow-sm`} onClick={()=> handleProductTab()}>Products</button>
                        <button className={`btn ${actvBtn === 'cart' ? 'btn-primary' : 'bg-base-100'} rounded-full shadow-sm`} onClick={()=> handleCartTab()}>Cart (0)</button>
                    </div>
                </div>
            </div>

            {
                actvBtn === 'products' ? <DisplayCards packagePromise={packagePromise} /> : <Cart/>
            }

        </div>
    );
};

export default ToolCards;