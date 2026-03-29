import PackageCard from './PackageCard';
import DisplayCards from './DisplayCards';
import { useState } from 'react';
import Cart from './cart';

const ToolCards = ({packagePromise, cartItems, setCartItems}) => {

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
                        <button className={`btn border-0  ${actvBtn === 'products' ? 'btn-primary shadow-sm' : 'bg-base-100 btn-ghost shadow-none'} rounded-full`} onClick={()=> handleProductTab()}>Products</button>
                        <button className={`btn border-0 ${actvBtn === 'cart' ? 'btn-primary shadow-sm' : 'bg-base-100 btn-ghost shadow-none'} rounded-full`} onClick={()=> handleCartTab()}>Cart ({cartItems.length})</button>
                    </div>
                </div>
            </div>

            {
                actvBtn === 'products' ? <DisplayCards packagePromise={packagePromise} cartItems={cartItems} setCartItems={setCartItems} /> : <Cart cartItems={cartItems} setCartItems={setCartItems}/>
            }

        </div>
    );
};

export default ToolCards;