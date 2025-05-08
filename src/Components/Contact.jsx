import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setIsSubmitted(true); // Set the form as submitted
    };

    if (isSubmitted) {
        return (
            <div className="w-full bg-gradient-to-br from-red-50 to-white py-16 px-4 md:py-24 relative overflow-hidden">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Thank you for your message!</h2>
                <p className="text-gray-600 text-center">We will get back to you soon.</p>
            </div>
        );
    }

    return (
        <div className="w-full bg-gradient-to-br from-red-50 to-white py-16 px-4 md:py-24 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute left-0 top-0 w-64 h-64 bg-red-100 rounded-full opacity-50 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute right-0 bottom-0 w-48 h-48">
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                    <pattern id="dotPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="rgba(244, 114, 102, 0.3)" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#dotPattern)" />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left side content */}
                <div className="w-full md:w-2/5 pr-0 md:pr-8">
                    <h3 className="text-red-500 font-medium mb-3 tracking-wide uppercase text-sm">CONTACT WITH ME</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Have Any Project In Your Mind?</h2>
                    <p className="text-gray-600 mb-6 text-base">
                        I'm always excited to collaborate on new projects, freelance opportunities, or innovative ideas. Whether it's building a website, developing an app, or just talking tech — feel free to drop a message. Let’s turn your vision into reality!
                    </p>
                </div>

                {/* Right side form */}
                <div className="w-full md:w-3/5">
                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 bg-white"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Mail Address"
                                className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 bg-white"
                            />
                        </div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your messages..."
                            rows="6"
                            className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 mb-6 bg-white"
                        ></textarea>

                        <div className="relative flex justify-start">
                            <button
                                onClick={handleSubmit}
                                className="bg-red-500 hover:bg-red-600 text-white font-medium py-4 px-8 rounded-lg transition-all flex items-center"
                            >
                                Send Me Message
                            </button>
                            <div className="absolute -left-15 -top-3">
                                <ArrowRight size={60} className="text-yellow-400 transform rotate-30" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
