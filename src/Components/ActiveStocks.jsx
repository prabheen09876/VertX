import React from 'react';

function ActiveStocks() {
    const stocks = [
        {
            name: "NIFTY 50",
            value: "19,674.25",
            change: "+126.20",
            percentChange: "+0.64"
        },
        {
            name: "Reliance Industries",
            value: "2,456.30",
            change: "-32.45",
            percentChange: "-1.30"
        },
        {
            name: "HDFC Bank",
            value: "1,678.45",
            change: "+45.30",
            percentChange: "+2.77"
        },
        {
            name: "TCS",
            value: "3,567.80",
            change: "+78.90",
            percentChange: "+2.26"
        },
        {
            name: "Infosys",
            value: "1,345.60",
            change: "-12.35",
            percentChange: "-0.91"
        }
    ];

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-4">Most Active Stocks</h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Track the most actively traded stocks in the market. High trading volumes often indicate significant market movements and investor interest.
            </p>

            <div className="w-[80%] mx-auto">
                <div className="bg-blue-600 text-white p-4 rounded-t-lg text-center">
                    <h2 className="text-xl font-semibold">Indices Overview</h2>
                </div>

                <div className="bg-gray-100 p-4 grid grid-cols-4 gap-4 font-semibold">
                    <div>Index</div>
                    <div>Current Value</div>
                    <div>Change</div>
                    <div>% Change</div>
                </div>

                <div className="space-y-4">
                    {stocks.map((stock, index) => (
                        <div key={index}>
                            <div className="grid grid-cols-4 gap-4 p-4">
                                <div className="font-medium">{stock.name}</div>
                                <div>₹{stock.value}</div>
                                <div className={stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                                    {stock.change}
                                </div>
                                <div className={stock.percentChange.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                                    {stock.percentChange}%
                                </div>
                            </div>
                            {index < stocks.length - 1 && <hr className="border-gray-200" />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ActiveStocks;
