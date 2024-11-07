import React from 'react';

function HeroSection() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
            <h1 className="text-[5rem] font-bold text-[#111] leading-tight">
                Everything Finance in one place
            </h1>
            <h2 className="text-xl font-light mt-4 text-gray-700 max-w-2xl">
                Streamlined financial solutions tailored to your needs, all in one accessible platform
            </h2>
            <form className="mt-12">
                <input
                    type="text"
                    placeholder="Search Stocks in Nifty 50..."
                    className="w-80 h-12 px-6 rounded-full border border-[#1f1f1f] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
            </form>
        </main>
    );
}

export default HeroSection;
