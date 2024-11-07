import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

function WinnersLoosers() {
    const [winners, setWinners] = useState([
        { id: 1, name: 'HDFC Bank', price: '1678.45', change: '+3.8%', percentageGain: 3.8 },
        { id: 2, name: 'TCS', price: '3567.80', change: '+2.9%', percentageGain: 2.9 },
        { id: 3, name: 'Infosys', price: '1345.60', change: '+2.5%', percentageGain: 2.5 },
        { id: 4, name: 'Wipro', price: '945.25', change: '+2.2%', percentageGain: 2.2 },
        { id: 5, name: 'HCL Tech', price: '1123.75', change: '+2.0%', percentageGain: 2.0 }
    ]);

    const [losers, setLosers] = useState([
        { id: 1, name: 'Reliance', price: '2456.30', change: '-2.8%', percentageLoss: 2.8 },
        { id: 2, name: 'ITC', price: '389.45', change: '-2.5%', percentageLoss: 2.5 },
        { id: 3, name: 'Airtel', price: '867.30', change: '-2.2%', percentageLoss: 2.2 },
        { id: 4, name: 'SBI', price: '545.60', change: '-1.9%', percentageLoss: 1.9 },
        { id: 5, name: 'Axis Bank', price: '789.15', change: '-1.7%', percentageLoss: 1.7 }
    ]);

    useEffect(() => {
        // API integration will go here
        // Example:
        // const fetchData = async () => {
        //     try {
        //         const response = await fetch('your-api-endpoint');
        //         const data = await response.json();
        //         setWinners(data.winners);
        //         setLosers(data.losers);
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     }
        // };
        // fetchData();
    }, []);

    return (
        <div className="container mx-auto px-6 py-12 w-[80%]">
            <h1 className="text-4xl font-bold text-center mb-12">Market Movers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Winners Column */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h2 className="text-2xl font-semibold mb-6 text-green-600 flex items-center">
                        <TrendingUp className="mr-2" />
                        Top Gainers
                    </h2>
                    <div className="space-y-4">
                        {winners.map((stock) => (
                            <div key={stock.id} className="p-4 rounded-lg hover:bg-gray-50 transition-all border border-gray-100">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-medium">{stock.name}</h3>
                                    <span className="text-green-500 font-semibold">{stock.change}</span>
                                </div>
                                <div className="mt-2 text-gray-600">
                                    ₹{stock.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Losers Column */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h2 className="text-2xl font-semibold mb-6 text-red-600 flex items-center">
                        <TrendingDown className="mr-2" />
                        Top Losers
                    </h2>
                    <div className="space-y-4">
                        {losers.map((stock) => (
                            <div key={stock.id} className="p-4 rounded-lg hover:bg-gray-50 transition-all border border-gray-100">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-medium">{stock.name}</h3>
                                    <span className="text-red-500 font-semibold">{stock.change}</span>
                                </div>
                                <div className="mt-2 text-gray-600">
                                    ₹{stock.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WinnersLoosers;
