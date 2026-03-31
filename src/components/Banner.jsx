import React from 'react';
import Dot from '../assets/dot-icon.svg';
import { IoPlayOutline } from "react-icons/io5";
import banner from '../assets/banner.png';

const Banner = () => {
    return (
        <div className='w-4/5 mx-auto py-20 flex flex-col md:flex-row justify-between gap-7'>

            {/* left side */}
            <div className='space-y-5 flex flex-col justify-center'>
                <div>
                    <div className='justify-center items-center gap-2 inline-flex rounded-full bg-[#E1E7FF] text-blue-600 text-     [16px] font-medium px-4 py-2'>
                        <span><img src={Dot} alt="Dot" /></span>
                        <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                            New: AI-Powered Tools Available
                        </span>
                    </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#101727]">
                    Supercharge Your <br />Digital Workflow</h1>

                <p className="text-lg text-[#627382] max-w-lg">
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.Explore Products
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <button className="btn btn-primary rounded-full font-bold bg-[#4F39F6] hover:bg-[#3a28c2] text-white text-[16px]">
                        Explore Products
                    </button>
                    <button className="btn btn-outline rounded-full font-bold group flex items-center gap-2 border border-[#4F39F6] hover:bg-[#4F39F6] hover:text-white transition text-[16px] text-blue-500">
                        <span className="group-hover:translate-x-1 transition"><IoPlayOutline /></span>
                        Watch Demo

                    </button>
                </div>
            </div>

            {/* right side  */}
            <div>
                <img src={banner} alt="Banner Image" className="rounded-lg shadow-lg mt-6 lg:mt-0" />
            </div>

        </div>
    );
};

export default Banner;