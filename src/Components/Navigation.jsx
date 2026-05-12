import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { HiMenu, HiX } from "react-icons/hi";


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkStyle = ({ isActive }) =>
        isActive ? "text-[#00b55a] font-bold" : "text-gray-700 hover:text-[#00b55a] transition-colors";

    const mobileLinkStyle = ({ isActive }) =>
        isActive ? "text-[#00b55a] font-bold text-xl py-2" : "text-gray-700 hover:text-[#00b55a] transition-colors text-xl py-2";

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' }
    ];

    return (
        <nav className="shadow-md bg-white sticky top-0 z-50">
            <div className="max-w-[1120px] mx-auto px-4 py-4">
                <div className="flex justify-between items-center w-full">
                    <div className="flex-shrink-0">
                        <img src='/images/Logo.png' alt="Logo" className="h-8 md:h-10" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-[40px] items-center">
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={linkStyle}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <button className="border-2 border-[#00b55a] text-[#00b55a] px-6 py-2 rounded-lg font-semibold hover:bg-[#00b55a] hover:text-white transition-all">
                            Download CV
                        </button>
                    </div>

                    {/* Hamburger Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-3xl text-gray-700 focus:outline-none"
                        >
                            <HiMenu />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Drawer */}
                <div 
                    className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${
                        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className={`fixed top-0 left-0 h-full w-[75%] bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col p-6 gap-6 ${
                            isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <img src='/images/Logo.png' alt="Logo" className="h-8" />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-3xl text-gray-700 focus:outline-none"
                            >
                                <HiX />
                            </button>
                        </div>

                        <div className="flex flex-col gap-4">
                            {links.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={mobileLinkStyle}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <button className="border-2 border-[#00b55a] text-[#00b55a] px-6 py-2 rounded-lg font-semibold hover:bg-[#00b55a] hover:text-white transition-all w-full">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;