import React, { useState, useEffect } from 'react';
import photo from '../assets/images/photo_2.jpg';
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram, FaCode, FaPalette, FaLightbulb } from 'react-icons/fa';

const SocialIcon = ({ color, icon }) => (
    <div
        className="p-2 sm:p-3 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center justify-center"
        style={{ backgroundColor: color }}
    >
        {icon}
    </div>
);

const Home = () => {
    const [animateBackground, setAnimateBackground] = useState(false);
    const [imagePath, setImagePath] = useState(photo);

    useEffect(() => {
        setAnimateBackground(true);
        
        // Immediately make sure all sections are visible on mobile
        const forceVisibleSections = () => {
            if (window.innerWidth < 768) {
                const sections = document.querySelectorAll('section');
                sections.forEach(section => {
                    section.style.filter = 'blur(0px)';
                    section.style.opacity = '1';
                });
            }
        };
        
        // Run this initially and whenever window is resized
        forceVisibleSections();
        window.addEventListener('resize', forceVisibleSections);
        
        // Force project section to be visible when clicked
        const projectsLink = document.getElementById('projects-link');
        if (projectsLink) {
            projectsLink.addEventListener('click', () => {
                setTimeout(() => {
                    const projectSection = document.getElementById('projects');
                    if (projectSection) {
                        projectSection.style.filter = 'blur(0px)';
                        projectSection.style.opacity = '1';
                    }
                }, 100);
            });
        }

        // Create floating particles effect
        const createParticles = () => {
            const particlesContainer = document.getElementById('particles-container');
            if (!particlesContainer) return;

            // Clear existing particles
            particlesContainer.innerHTML = '';

            // Create new particles
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                const size = Math.random() * 10 + 5;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const duration = Math.random() * 15 + 10;
                const delay = Math.random() * 5;

                // Style the particle
                particle.className = 'absolute rounded-full';
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.opacity = '0.2';
                particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;

                // Randomly select color
                const colors = ['bg-red-400', 'bg-blue-400', 'bg-yellow-400', 'bg-purple-400', 'bg-green-400'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                particle.classList.add(randomColor);

                particlesContainer.appendChild(particle);
            }
        };

        createParticles();

        // Check if image exists
        const img = new Image();
        img.onload = () => {
            // Image loaded successfully
        };
        img.onerror = () => {
            // Try with a different path format as fallback
            setImagePath('/src/assets/images/PHOTO.jpg'); // Fallback path
        };
        img.src = photo;

        // Run this once after DOM is loaded or in useEffect (React)
        const sections = document.querySelectorAll('section');

        // Create an Intersection Observer with different thresholds for mobile and desktop
        const getThreshold = () => {
            // Use a lower threshold for mobile devices
            return window.innerWidth < 768 ? 0.05 : 0.2;
        };
        
        const threshold = getThreshold();
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio >= threshold) {
                        // Section is visible enough - remove blur
                        entry.target.style.filter = 'blur(0px)';
                        entry.target.style.opacity = '1';
                    } else {
                        // Section is not visible enough - apply blur
                        entry.target.style.filter = 'blur(4px)';
                        entry.target.style.opacity = '0.7';
                    }

                    entry.target.style.transition = 'filter 0.5s ease, opacity 0.5s ease';
                });
            },
            {
                threshold: [0, threshold, 1], // Trigger when visibility crosses threshold
                rootMargin: '0px 0px -10% 0px' // Slightly adjust the effective viewport
            }
        );

        // Observe each section
        sections.forEach(section => {
            observer.observe(section);
        });
        
        // Re-initialize observer on window resize
        const handleResize = () => {
            // Disconnect old observer
            observer.disconnect();
            
            // Create new observer with updated threshold
            const newThreshold = getThreshold();
            const newObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.intersectionRatio >= newThreshold) {
                            entry.target.style.filter = 'blur(0px)';
                            entry.target.style.opacity = '1';
                        } else {
                            entry.target.style.filter = 'blur(4px)';
                            entry.target.style.opacity = '0.7';
                        }
                    });
                },
                {
                    threshold: [0, newThreshold, 1],
                    rootMargin: '0px 0px -10% 0px'
                }
            );
            
            // Observe sections with new observer
            sections.forEach(section => {
                newObserver.observe(section);
            });
        };
        
        // Add event listener for resize
        window.addEventListener('resize', handleResize);
        
        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
        };

    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
            {/* Decorative background elements */}
            <div
                id="particles-container"
                className="fixed inset-0 pointer-events-none z-0"
            ></div>

            {/* Animated Background Gradient */}
            <div className={`fixed inset-0 bg-gradient-to-br from-red-50 via-gray-50 to-purple-50 opacity-60 pointer-events-none z-0 ${animateBackground ? 'animate-gradient' : ''}`}></div>

            {/* Decorative shapes */}
            <div className="fixed top-40 left-10 w-20 sm:w-40 h-20 sm:h-40 bg-yellow-200 rounded-full filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
            <div className="fixed bottom-40 right-10 w-32 sm:w-60 h-32 sm:h-60 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
            <div className="fixed top-1/4 right-1/3 w-20 sm:w-32 h-20 sm:h-32 bg-red-200 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000 pointer-events-none"></div>


            {/* Enhanced Hero Section */}
            <div className="container mx-auto px-4 py-8 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
                    {/* Left Column - Text Content with enhanced styling */}
                    <div className="mb-8 relative order-2 md:order-1">
                        {/* Social Icons - More visible on mobile and desktop with better positioning */}
                        <div className="absolute left-0 top-10 flex flex-col space-y-3 sm:space-y-4">
                            <a href="https://github.com/HARSHIT05060" target="_blank" rel="noopener noreferrer">
                                <SocialIcon color="#000000" icon={<FaGithub className="text-white text-xs sm:text-xl" />} />
                            </a>
                            <a href="https://x.com/HARSHIT_0705?t=4k74N22N1CdA-sLev8HY9Q&s=09" target="_blank" rel="noopener noreferrer">
                                <SocialIcon color="#1DA1F2" icon={<FaTwitter className="text-white text-xs sm:text-xl" />} />
                            </a>
                            <a href="https://www.linkedin.com/in/harshit-kapadia-872606228/" target="_blank" rel="noopener noreferrer">
                                <SocialIcon color="#0A66C2" icon={<FaLinkedinIn className="text-white text-xs sm:text-xl" />} />
                            </a>
                            <a href="https://www.instagram.com/harshit.__.07?utm_source=qr&igsh=ZXAzN25ocjA1MXBl" target="_blank" rel="noopener noreferrer">
                                <SocialIcon color="#E1306C" icon={<FaInstagram className="text-white text-xs sm:text-xl" />} />
                            </a>
                        </div>


                        <div className="pl-10 sm:pl-12 md:pl-20">
                            <div className="relative">
                                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-1 sm:mb-2">
                                    Hello, I'm
                                </h1>
                                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                                    HARSHIT KAPADIA
                                </h1>
                                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 leading-tight relative">
                                    Web Developer
                                    <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-red-500"></span>
                                </h1>

                                {/* Skill badges */}
                                <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                                    <span className="bg-gray-100 text-gray-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center">
                                        <FaCode className="mr-1 text-red-500" /> Frontend
                                    </span>
                                    <span className="bg-gray-100 text-gray-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center">
                                        <FaPalette className="mr-1 text-purple-500" /> UI/UX
                                    </span>
                                    <span className="bg-gray-100 text-gray-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center">
                                        <FaLightbulb className="mr-1 text-yellow-500" /> Creative
                                    </span>
                                </div>

                                <p className="text-gray-600 mt-3 sm:mt-4 mb-6 sm:mb-8 max-w-lg text-sm sm:text-base md:text-lg">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page layout. I create stunning web experiences
                                    that capture attention and deliver results.
                                </p>
                                <a href="#projects" id="projects-link">
                                    <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-5 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px] flex items-center group text-sm sm:text-base">
                                        <span>Browse Projects</span>
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </button>
                                </a>

                                {/* Decorative dots */}
                                <div className="absolute -left-8 bottom-0 flex flex-col space-y-1">
                                    <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-red-400"></div>
                                    <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-red-500"></div>
                                    <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-red-600"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image with responsive styling */}
                    <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-[300px] sm:h-[350px] md:h-[400px] mx-auto order-1 md:order-2 mb-8 md:mb-0">

                        {/* Background shapes for depth */}
                        <div className="absolute w-2/5 h-1/2 bg-yellow-400 right-5 bottom-3 z-10 transform -rotate-6 rounded-lg opacity-80"></div>
                        <div className="absolute w-1/3 h-1/3 bg-yellow-500 left-1 top-2 transform -rotate-12 rounded-lg opacity-70"></div>

                        {/* Decorative grid patterns */}
                        <div className="absolute left-2 top-20 z-5 opacity-20 transform -rotate-6">
                            <div className="grid grid-cols-3 gap-1">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="w-1 h-1 sm:w-2 sm:h-2 bg-purple-500 rounded-full"></div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute right-0 bottom-16 z-5 opacity-20">
                            <div className="grid grid-cols-3 gap-1">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="w-1 h-1 sm:w-2 sm:h-2 bg-red-900 rounded-full"></div>
                                ))}
                            </div>
                        </div>

                        {/* Border Frame */}
                        <div className="absolute border-2 border-gray-800 w-4/5 h-4/5 z-10 left-[10%] top-[10%] transform rotate-6 rounded-lg">
                            <div className="absolute -top-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                            <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                            <div className="absolute -bottom-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
                        </div>

                        {/* Main Image Container with better visibility and fixed positioning */}
                        <div className="absolute w-4/5 h-4/5 z-20 left-[10%] top-[10%] rounded-lg shadow-xl overflow-hidden">
                            {/* Profile photo container with fixed z-index and positioning */}
                            <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg">
                                {/* The image component with improved visibility and error handling */}
                                <img
                                    src={imagePath}
                                    alt="Harshit Kapadia"
                                    className="w-50 h-50 object-cover z-30 relative"
                                    style={{ display: "block", width: "100%", height: "100%" }}
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                        const fallbackDiv = document.getElementById('image-fallback');
                                        if (fallbackDiv) {
                                            fallbackDiv.style.display = "flex";
                                        }
                                    }}
                                />

                                {/* Fallback display when image fails */}
                                <div
                                    id="image-fallback"
                                    className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600 z-30"
                                    style={{ display: "none" }}
                                >
                                    <div className="text-center p-4">
                                        <div className="text-purple-500 text-3xl sm:text-4xl mb-2">HK</div>
                                        <div>Image Not Available</div>
                                        <div className="text-xs text-gray-500 mt-2">Path: {imagePath}</div>
                                    </div>
                                </div>

                                {/* Hover highlight effect */}
                                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 z-40"></div>

                                {/* Corner brackets */}
                                <div className="absolute top-2 right-2 w-5 h-5 sm:w-8 sm:h-8 border-t-2 border-r-2 border-white opacity-70 z-50"></div>
                                <div className="absolute bottom-2 left-2 w-5 h-5 sm:w-8 sm:h-8 border-b-2 border-l-2 border-white opacity-70 z-50"></div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-1.5 right-1.5 w-12 h-12 sm:w-20 sm:h-20 bg-red-400 rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute bottom-1.5 left-11.5 w-10 h-10 sm:w-15 sm:h-15 bg-blue-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
                        <div className="absolute top-0 right-0 w-16 h-16 sm:w-23 sm:h-23 border-2 border-dashed border-yellow-500 rounded-full opacity-30 animate-spin-slow"></div>
                        <div className="absolute bottom-0 left-10 w-12 h-12 sm:w-18 sm:h-18 border-2 border-dashed border-yellow-500 rounded-full opacity-30 animate-spin-slow"></div>
                    </div>

                </div>
            </div>

            {/* Add CSS for animations */}
            <style jsx global>{`
                @keyframes float {
                    0% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                    100% { transform: translateY(0) rotate(0); }
                }

                @keyframes blob {
                    0% { transform: scale(1); }
                    33% { transform: scale(1.1); }
                    66% { transform: scale(0.9); }
                    100% { transform: scale(1); }
                }

                @keyframes spin-slow {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animate-spin-slow {
                    animation: spin-slow 12s linear infinite;
                }

                .animate-gradient {
                    background-size: 300% 300%;
                    animation: gradient-shift 15s ease infinite;
                }

                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .animation-delay-1000 {
                    animation-delay: 1s;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }

                /* Responsive animations for mobile */
                @media (max-width: 640px) {
                    @keyframes float {
                        0% { transform: translateY(0) rotate(0); }
                        50% { transform: translateY(-10px) rotate(3deg); }
                        100% { transform: translateY(0) rotate(0); }
                    }
                }
            `}</style>
        </div>
    );
};

export default Home;