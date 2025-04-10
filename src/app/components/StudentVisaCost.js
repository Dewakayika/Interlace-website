'use client';
import React from 'react';

const StudentVisaCost = () => {
    const costs = [
        { item: 'Admission Fee to University', cost: '0 - 250' },
        { item: 'CoE (1st Tuition Fee)', cost: '5,000 - 10,000' },
        { item: 'OSHC per year', cost: '600 - 800' },
        { item: 'Financial Proof', cost: '29,000' },
        { item: 'Health Check', cost: '150 - 200' },
        { item: 'IELTS, TOEFL, PTE', cost: '250 - 320' },
        { item: 'Passport', cost: '30' },
        { item: 'Service Charge', cost: 'Free' },
    ];

    const totalEstimatedCost = '35,030 - 40,600'; // Example total cost range

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    Estimated Costs (AUD) as of 2025
                </h2>
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-sm font-medium text-gray-800">Item</th>
                                <th className="px-6 py-4 text-sm font-medium text-gray-800">Cost (AUD)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {costs.map((cost, index) => (
                                <tr
                                    key={index}
                                    className={`border-t ${
                                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                    }`}
                                >
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800">
                                        {cost.item}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{cost.cost}</td>
                                </tr>
                            ))}
                            {/* Total Estimated Cost Row */}
                            <tr className="border-t bg-gray-100">
                                <td className="px-6 py-4 text-sm font-bold text-gray-800">
                                    Total Estimated Cost
                                </td>
                                <td className="px-6 py-4 text-sm font-bold text-gray-800">
                                    {totalEstimatedCost}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default StudentVisaCost;