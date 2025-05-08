import React from "react";
import photo_3 from "../assets/images/photo_3.jpg"; // Import your image here

const Footer = () => {
    return (
        <footer className="bg-pink-50 text-gray-800 py-12 px-4">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 md:text-left">

                {/* Profile Section */}
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src={photo_3}
                        alt="Profile"
                        className="w-28 h-28 rounded-full border-4 border-red-400 object-cover shadow-md"
                    />
                    <h2 className="mt-4 text-xl font-bold">Harshit Kapadia</h2>
                    <p className="text-red-500">Full Stack Developer</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
                    <p><strong>Email:</strong> kapadiaharshit563@gmail.com</p>
                    <p><strong>Phone:</strong> +91 63544 79901</p>
                    <p><strong>Location:</strong> Surat, Gujarat, India</p>
                </div>

                {/* Let's Talk Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Let's Talk</h3>
                    <p className="text-sm">
                        I’m always open to discuss your project or ideas. Feel free to reach out for collaboration, help, or advice.
                    </p>
                    <a
                        href="mailto:kapadiaharshit563@gmail.com"
                        className="inline-block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-12 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} All Rights Reserved. Built with ❤️ by Harshit.
            </div>
        </footer>
    );
};

export default Footer;
