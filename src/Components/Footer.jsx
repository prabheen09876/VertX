import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
    return (
        <footer className=" text-zinc-600 py-12">
            <hr className='mb-20' />
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* About Us Section (60%) */}
                    <div className="md:w-[60%] mb-8 md:mb-0 pl-10">
                        <h2 className="text-2xl font-bold mb-4">About Us</h2>
                        <p className="text-zinc-600 leading-relaxed">

                            We are dedicated to providing comprehensive stock market insights and tools
                            to help investors make informed decisions. Our platform combines real-time
                            market data, educational resources, and virtual trading capabilities to create
                            a complete trading experience for both novice and experienced investors.
                        </p>
                    </div>

                    {/* Right Section (40%) */}
                    <div className="md:w-[35%] flex justify-between">
                        {/* Left Column - Links */}
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <a href="#" className="block text-zinc-600 hover:text-white transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="block text-zinc-600 hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="block text-zinc-600 hover:text-white transition-colors">
                                Contact Us
                            </a>
                        </div>

                        {/* Right Column - Social Media */}
                        <div className="ml-8 pr-24" >
                            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                            <div className="flex flex-col space-y-4">
                                <a href="#" className="hover:text-blue-400 transition-colors flex items-center">
                                    <Facebook size={24} className="mr-2" /> Facebook
                                </a>
                                <a href="#" className="hover:text-pink-400 transition-colors flex items-center">
                                    <Instagram size={24} className="mr-2" /> Instagram
                                </a>
                                <a href="#" className="hover:text-blue-300 transition-colors flex items-center">
                                    <Twitter size={24} className="mr-2" /> Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
