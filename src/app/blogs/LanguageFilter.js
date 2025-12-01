'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LanguageFilter({ selectedLanguage, detectedLanguage }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isAutoDetected, setIsAutoDetected] = useState(false);

  useEffect(() => {
    // Check if language was auto-detected (no language param in URL)
    setIsAutoDetected(!searchParams.get('language'));
  }, [searchParams]);

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    
    if (language === 'Auto') {
      // Remove language param to trigger auto-detection
      params.delete('language');
    } else {
      params.set('language', language);
    }
    
    // Reset to page 1 when changing language filter
    params.delete('page');
    
    const queryString = params.toString();
    router.push(`/blogs${queryString ? `?${queryString}` : ''}`);
  };

  // Get the display value for the select
  const displayValue = searchParams.get('language') || 'Auto';

  return (
    <div className="flex flex-col items-end mb-8">
      <div className="relative inline-flex items-center">
        <label htmlFor="language-filter" className="mr-3 text-sm font-medium text-gray-700">
          Language:
        </label>
        <select
          id="language-filter"
          value={displayValue}
          onChange={handleLanguageChange}
          className="px-4 py-2 pr-10 border border-gray-300 rounded-md bg-white text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors cursor-pointer appearance-none"
        >
          <option value="Auto">Auto Detect ({detectedLanguage})</option>
          <option value="Indonesia">Indonesia</option>
          <option value="English">English</option>
          <option value="All">All Languages</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

