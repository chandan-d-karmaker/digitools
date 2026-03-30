import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#101727] pt-28 pb-8 space-y-20'>

            <div className='w-4/5 mx-auto text-white'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-4xl font-bold text-white mb-4'>DigiTools</h1>
                        <p className='opacity-80 max-w-sm'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='flex justify-between gap-20'>
                        <div className='space-y-4'>
                            <h1>Product</h1>
                            <ul className='space-y-2 opacity-80'>
                                <li><a href="">Features</a></li>
                                <li><a href="">Pricing</a></li>
                                <li><a href="">Templates</a></li>
                                <li><a href="">Integrations</a></li>
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <h1>Company</h1>
                            <ul className='space-y-2 opacity-80'>
                                <li><a href="">About</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">Press</a></li>
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <h1>Resources</h1>
                            <ul className='space-y-2 opacity-80'>
                                <li><a href="">Documentation</a></li>
                                <li><a href="">Help Center</a></li>
                                <li><a href="">Community</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className='space-y-4'>
                        <h1>Social Links</h1>
                        <div className='flex gap-2'>
                            <FaInstagramSquare />
                            <FaFacebookSquare />
                            <FaTwitterSquare />
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-4/5 mx-auto pt-7 border-t border-gray-700 flex justify-between items-center text-sm text-gray-400'>

                <h1>© 2026 Digitools. All rights reserved.</h1>
                <div className='flex gap-5'>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookies</a>
                </div>

            </div>


        </div>
    );
};

export default Footer;