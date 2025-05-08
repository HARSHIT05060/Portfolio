import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import resume from '../assets/PDF/RESUME.pdf';

const Navbar = ({ activeNav, setActiveNav }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navItems = ['home', 'about', 'projects', "contact"];
    const [hovered, setHovered] = useState(false);

    const handleNavClick = (navItem) => {
        setActiveNav(navItem);
        setMobileMenuOpen(false);
        const target = document.getElementById(navItem);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div
                        className="flex items-center cursor-pointer"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <div className="relative flex items-center justify-center">
                            {/* Main logo shape */}
                            <div
                                className={`w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg shadow-md flex items-center justify-center transition-all duration-300 ${hovered ? "transform -rotate-12 scale-110" : ""
                                    }`}
                            >
                                {/* Letter P in white */}
                                <span className="text-white font-bold text-xl">P</span>
                            </div>

                            {/* Decorative elements */}
                            <div
                                className={`absolute -right-1 -bottom-1 w-4 h-4 bg-amber-400 rounded-md transition-all duration-300 ${hovered ? "transform translate-x-1 translate-y-1" : ""
                                    }`}
                            />
                        </div>

                        {/* Text */}
                        <h1
                            className={`ml-3 font-bold text-xl transition-colors duration-300 ${hovered ? "text-indigo-600" : "text-gray-800"
                                }`}
                        >
                            Portfolio
                        </h1>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 focus:outline-none"
                        >
                            {mobileMenuOpen ? (
                                <FaTimes className="h-6 w-6 text-red-500" />
                            ) : (
                                <FaBars className="h-6 w-6 text-gray-800" />
                            )}
                        </button>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <span
                                key={item}
                                onClick={() => handleNavClick(item)}
                                className={`cursor-pointer font-medium capitalize pb-2 relative transition-colors duration-300 ${activeNav === item
                                    ? 'text-red-500 font-semibold'
                                    : 'text-gray-800 hover:text-red-500'
                                    }`}
                            >
                                {item}
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${activeNav === item ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                ></span>
                            </span>
                        ))}
                        <a
                            href={resume}
                            download="Harshit_Kapadia_Resume.pdf"
                            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <span
                                    key={item}
                                    onClick={() => handleNavClick(item)}
                                    className={`cursor-pointer font-medium capitalize pb-2 relative transition-colors duration-300 ${activeNav === item
                                        ? 'text-red-500 font-semibold'
                                        : 'text-gray-800 hover:text-red-500'
                                        }`}
                                >
                                    {item}
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300 ${activeNav === item ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                    ></span>
                                </span>
                            ))}
                            <a
                                href={resume}
                                download="Harshit_Kapadia_Resume.pdf"
                                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 self-start mt-4"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
