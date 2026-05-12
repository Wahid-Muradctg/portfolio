import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
    return (
        <footer className="max-w-[1200px] mx-auto px-4 py-10">
            <hr className="border-gray-200" />
            <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-6 text-center md:text-left">
                <p className="text-gray-500 text-sm">© 2024 Tanvir. All rights reserved.</p>
                <p className="text-gray-500 text-sm">Designed and Developed by Tanvir</p>
                <div className="flex items-center gap-4">
                    <a href="#" className='bg-[#00b55a] border border-[#00b55a] p-2 rounded-full text-white hover:text-[#00b55a] hover:bg-white transition-all'> <FaFacebookF/></a>
                    <a href="#" className='bg-[#00b55a] border border-[#00b55a] p-2 rounded-full text-white hover:text-[#00b55a] hover:bg-white transition-all'> <TiSocialTwitter /></a>
                    <a href="#" className='bg-[#00b55a] border border-[#00b55a] p-2 rounded-full text-white hover:text-[#00b55a] hover:bg-white transition-all'> <FaInstagram /></a>
                    <a href="#" className='bg-[#00b55a] border border-[#00b55a] p-2 rounded-full text-white hover:text-[#00b55a] hover:bg-white transition-all'> <FaLinkedinIn /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;