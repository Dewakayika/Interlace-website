import React from 'react';

const StudyForms = () => {
    return (
        <div className="relative bottom-0 left-0 right-0 mb-8">
            <div className="w-full mx-auto">
                
                {/* Search Form */}
                <div className="backdrop-blur-md bg-white/20 rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 p-6">
                    <p className="text-white w-full text-lg font-regular mb-2 font-inter">Search for your course</p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <input 
                                type="text" 
                                placeholder="Enter course subject e.g. Law" 
                                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-white placeholder-white/70 backdrop-blur-sm"
                            />
                        </div>
                        <div className="flex-1">
                            <select className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-white appearance-none backdrop-blur-sm">
                                <option value="" className="text-gray-800">Select study level</option>
                                <option value="undergraduate" className="text-gray-800">Undergraduate</option>
                                <option value="postgraduate" className="text-gray-800">Postgraduate</option>
                                <option value="phd" className="text-gray-800">PhD</option>
                                <option value="diploma" className="text-gray-800">Diploma</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <select className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-white appearance-none backdrop-blur-sm">
                                <option value="" className="text-gray-800">Select a study state</option>
                                <option value="nsw" className="text-gray-800">New South Wales</option>
                                <option value="vic" className="text-gray-800">Victoria</option>
                                <option value="qld" className="text-gray-800">Queensland</option>
                                <option value="wa" className="text-gray-800">Western Australia</option>
                                <option value="sa" className="text-gray-800">South Australia</option>
                                <option value="tas" className="text-gray-800">Tasmania</option>
                                <option value="act" className="text-gray-800">Australian Capital Territory</option>
                                <option value="nt" className="text-gray-800">Northern Territory</option>
                            </select>
                        </div>
                        <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-2 rounded-lg transition duration-300 whitespace-nowrap backdrop-blur-sm ">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyForms;