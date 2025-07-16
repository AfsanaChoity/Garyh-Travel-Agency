import React from 'react';

const Roadmap = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-100 rounded-lg relative">
      {/* Container for the path and content */}
      <div className="relative pl-20">
        {/* Path line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-300"></div>

        {/* Step 1 */}
        <div className="flex items-center mb-10 relative z-10">
          {/* Icon inside circle */}
          <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-400 flex items-center justify-center shadow-lg">
            {/* Lightbulb icon */}
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a7 7 0 00-7 7c0 3.866 3.134 7 7 7s7-3.134 7-7a7 7 0 00-7-7zm0 12a5 5 0 01-5-5c0-2.757 2.243-5 5-5s5 2.243 5 5a5 5 0 01-5 5z" />
            </svg>
          </div>
          {/* Text content */}
          <div className="ml-4">
            <h3 className="font-bold text-lg mb-1">1. Why RVnBo?</h3>
            <p className="text-sm">Freedom of travel simple living</p>
          </div>
        </div>

        {/* Path turning right */}
        <div className="absolute left-12 top-16 w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-gray-300 border-b-8 border-b-transparent rotate-45"></div>

        {/* Step 2 */}
        <div className="flex items-center mb-10 relative z-10">
          {/* Icon inside circle */}
          <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-400 flex items-center justify-center shadow-lg">
            {/* Rocket icon */}
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a2 2 0 00-2 2v4.586l-4.293 4.293a1 1 0 000 1.414l4.293 4.293V18a2 2 0 004 0v-4.414l4.293-4.293a1 1 0 000-1.414L12 8.586V4a2 2 0 00-2-2z" />
            </svg>
          </div>
          {/* Text content */}
          <div className="ml-4">
            <h3 className="font-bold text-lg mb-1">3. Forward</h3>
            <p className="text-sm">Platform support & convenience</p>
          </div>
        </div>

        {/* Path turning left */}
        <div className="absolute left-12 top-40 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-gray-300 border-b-8 border-b-transparent rotate-45"></div>

        {/* Step 3 */}
        <div className="flex items-center mb-10 relative z-10">
          {/* Icon inside circle */}
          <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-400 flex items-center justify-center shadow-lg">
            {/* Mountain icon */}
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 12l4-4 4 4 4-4 4 4v4H4v-4z" />
            </svg>
          </div>
          {/* Text content */}
          <div className="ml-4">
            <h3 className="font-bold text-lg mb-1">4. Adventure</h3>
            <p className="text-sm">Experience over materialism</p>
          </div>
        </div>

        {/* Path turning right */}
        <div className="absolute left-12 top-64 w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-gray-300 border-b-8 border-b-transparent rotate-45"></div>

        {/* Step 4 */}
        <div className="flex items-center mb-10 relative z-10">
          {/* Icon inside circle */}
          <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-400 flex items-center justify-center shadow-lg">
            {/* Car icon */}
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="7" cy="13" r="2" />
              <circle cx="17" cy="13" r="2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13h14l1 4H4l1-4z" />
            </svg>
          </div>
          {/* Text content */}
          <div className="ml-4">
            <h3 className="font-bold text-lg mb-1">5. Journey</h3>
            <p className="text-sm">Discovery, peace, and independence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;