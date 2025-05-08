import React from 'react';

const NavLink = ({ text, active, onClick }) => {
    return (
        <a
            href={`#${text.toLowerCase()}`}
            onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                document.getElementById(text.toLowerCase()).scrollIntoView({
                    behavior: 'smooth', // Smooth scroll to the section
                });
                onClick(); // Set the active state on click
            }}
            className={`${active ? 'text-red-600' : 'text-gray-800'}
                hover:text-red-600 transition-colors font-medium cursor-pointer`}
        >
            {text.charAt(0).toUpperCase() + text.slice(1)}
        </a>
    );
};

export default NavLink;
