import React, { useState } from 'react';

const AnotherVersion = () => {
    // 1. Manage which tab is currently active
    const [activeTab, setActiveTab] = useState('Overview');

    // 2. Data structure for your tabs
    const tabs = [
        { id: 'Overview', label: 'Overview', content: 'This is the Overview section content.' },
        { id: 'Message', label: 'Message from', content: 'Here is the message from the office.' },
        { id: 'Staff', label: 'Staff', content: 'List of staff members and their roles.' },
        { id: 'Alumni', label: 'Alumni', content: 'Information regarding our Alumni network.' },
    ];

    return (
        <div className="container p-6 px-0 mx-auto">
            <h1 className="mb-6 text-2xl font-bold text-gray-800">Office of the VC</h1>
            
            <div className="flex flex-row border border-gray-200 rounded-lg overflow-hidden min-h-[300px]">
                
                {/* Left Side: Tab Triggers */}
                <div className="w-1/3 border-r border-gray-200 bg-gray-50">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full text-left px-6 py-4 transition-colors duration-200 font-medium
                                ${activeTab === tab.id 
                                    ? 'bg-white text-blue-600 border-l-4 border-blue-600 shadow-sm' 
                                    : 'text-gray-600 hover:bg-gray-100 border-l-4 border-transparent'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Right Side: Tab Content */}
                <div className="w-2/3 p-8 bg-white">
                    {tabs.map((tab) => (
                        activeTab === tab.id && (
                            <div key={tab.id} className="duration-300 animate-in fade-in">
                                <h2 className="mb-4 text-xl font-semibold">{tab.label}</h2>
                                <p className="leading-relaxed text-gray-600">
                                    {tab.content}
                                </p>
                            </div>
                        )
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AnotherVersion;