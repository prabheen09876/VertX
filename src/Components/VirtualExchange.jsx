import React from 'react';
import ipadImage from './Assets/ipad.png';

function VirtualExchange() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start py-20 px-6">
            <h1 className="text-5xl font-bold text-[#111]">Virtual Exchange</h1>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl text-center">
                Experience real-time trading in a risk-free environment. Practice your investment strategies and learn the ins and outs of stock trading without using real money.
            </p>

            <div className="mt-20 w-full max-w-4xl">
                <img
                    src={ipadImage}
                    alt="Trading Interface"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
}

export default VirtualExchange;
