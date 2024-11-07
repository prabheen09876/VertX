import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

function MarketTrackers() {
    const [stocks, setStocks] = useState([
        { id: 1, name: 'HDFC Bank', price: '1678.45', change: '+2.3%', isUp: true },
        { id: 2, name: 'Reliance', price: '2456.30', change: '-1.2%', isUp: false },
        { id: 3, name: 'TCS', price: '3567.80', change: '+1.8%', isUp: true },
        { id: 4, name: 'Infosys', price: '1345.60', change: '+0.7%', isUp: true },
        { id: 5, name: 'ICICI Bank', price: '945.25', change: '-0.5%', isUp: false }
    ]);

    // useEffect for future API integration
    useEffect(() => {
        // API call will go here
        // setStocks(apiData);
    }, []);

    return (
        <div className="container mx-auto px-6 py-12 w-[80%]">
            <h3 className="text-2xl font-semibold mb-8">Market Trackers →</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stocks.slice(0, 3).map((stock) => (
                    <div key={stock.id} className="p-8 rounded-lg hover:shadow-lg transition-all bg-transparent border border-gray-200 w-full">
                        <div className="flex justify-between items-center">
                            <h4 className="font-medium">{stock.name}</h4>
                            {stock.isUp ?
                                <TrendingUp className="text-green-500" size={20} /> :
                                <TrendingDown className="text-red-500" size={20} />
                            }
                        </div>
                        <div className="mt-4">
                            <span className="text-lg font-bold">₹{stock.price}</span>
                            <span className={`ml-2 text-sm ${stock.isUp ? 'text-green-500' : 'text-red-500'}`}>
                                {stock.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {stocks.slice(3, 5).map((stock) => (
                    <div key={stock.id} className="p-8 rounded-lg hover:shadow-lg transition-all bg-transparent border border-gray-200 w-full">
                        <div className="flex justify-between items-center">
                            <h4 className="font-medium">{stock.name}</h4>
                            {stock.isUp ?
                                <TrendingUp className="text-green-500" size={20} /> :
                                <TrendingDown className="text-red-500" size={20} />
                            }
                        </div>
                        <div className="mt-4">
                            <span className="text-lg font-bold">₹{stock.price}</span>
                            <span className={`ml-2 text-sm ${stock.isUp ? 'text-green-500' : 'text-red-500'}`}>
                                {stock.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MarketTrackers;
