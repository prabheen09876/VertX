import React from 'react';
import { Home, Globe, Trello, TrendingUp } from 'lucide-react';

function NavBar() {
    return (
        <nav className="container mx-auto h-20 flex items-center justify-between px-6 mt-2">
            <div className="text-3xl font-bold">VertX</div>
            <div className="flex items-center justify-around px-8 py-2 border border-black rounded-full w-[40%]">
                <a href="#" className="flex items-center gap-2 hover:text-gray-600 hover:border hover:border-black rounded-full px-3 py-1 transition-all">
                    <Home size={20} />
                    <span>Home</span>
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-gray-600 hover:border hover:border-black rounded-full px-3 py-1 transition-all">
                    <TrendingUp size={20} />
                    <span>Stocks</span>
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-gray-600 hover:border hover:border-black rounded-full px-3 py-1 transition-all">
                    <Globe size={20} />
                    <span>Community</span>
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-gray-600 hover:border hover:border-black rounded-full px-3 py-1 transition-all">
                    <Trello size={20} />
                    <span>Virtual Exchange</span>
                </a>
            </div>
            <div className="flex items-center gap-4">
                <button className="px-4 py-2 hover:bg-gray-100 rounded-full transition-colors">
                    Login
                </button>
                <button className="px-4 py-2 hover:bg-gray-100 rounded-full transition-colors">
                    Sign Up
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
