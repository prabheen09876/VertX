import React, { useState } from 'react';

function Newsletter() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription logic here
        console.log('Subscribed with email:', email);
        setEmail('');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-20 px-6">
            <h1 className="text-6xl font-bold text-center mb-12">Subscribe to Our Stock <br /> Market NewsLetter</h1>

            <div className="w-full max-w-md flex flex-col items-center">
                <form onSubmit={handleSubmit} className="relative w-full flex justify-center">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-center"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                        Subscribe
                    </button>
                </form>

                <p className="text-sm text-gray-600 mt-4 text-center">
                    By subscribing, you agree to receive our newsletter emails. You can unsubscribe at any time.
                </p>
            </div>
        </div>
    );
}

export default Newsletter;
