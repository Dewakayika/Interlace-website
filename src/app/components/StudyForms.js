import React from 'react';

const StudyForms = () => {
    return (
        <div className="relative bottom-0 left-0 right-0 mb-32 hidden md:block">
            <div className="w-full mx-auto">
                {/* Search Form */}
                <div className="backdrop-blur-md bg-white/20 rounded-xl shadow-lg border border-white/20 p-6">
                    <p className="text-white text-lg font-regular mb-2 font-inter">
                        Search for your course
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Course Input */}
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Enter course subject e.g. Law"
                                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-white placeholder-white/70"
                            />
                        </div>

                        {/* Study Level Dropdown */}
                        <div className="flex-1">
                            <select
                                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-white appearance-none"
                            >
                                <option value="" className="text-gray-800">
                                    Select study level
                                </option>
                                {['Undergraduate', 'Postgraduate', 'PhD', 'Diploma'].map((level, index) => (
                                    <option key={index} value={level.toLowerCase()} className="text-gray-800">
                                        {level}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Study State Dropdown */}
                        <div className="flex-1">
                            <select
                                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-white appearance-none"
                            >
                                <option value="" className="text-gray-800">
                                    Select a study state
                                </option>
                                {[
                                    { value: 'nsw', label: 'New South Wales' },
                                    { value: 'vic', label: 'Victoria' },
                                    { value: 'qld', label: 'Queensland' },
                                    { value: 'wa', label: 'Western Australia' },
                                    { value: 'sa', label: 'South Australia' },
                                    { value: 'tas', label: 'Tasmania' },
                                    { value: 'act', label: 'Australian Capital Territory' },
                                    { value: 'nt', label: 'Northern Territory' },
                                ].map((state, index) => (
                                    <option key={index} value={state.value} className="text-gray-800">
                                        {state.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Search Button */}
                        <button
                            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-2 rounded-lg transition duration-300 whitespace-nowrap"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyForms;