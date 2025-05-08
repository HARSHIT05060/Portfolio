// import { useState } from 'react';

export default function About() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-16 px-4" style={{ backgroundColor: "#F3F3F4" }}>
      {/* Background decorative elements */}
      <div className="absolute top-20 right-8">
        <div className="w-16 h-16 bg-red-300 rounded-full opacity-80"></div>
      </div>
      <div className="absolute bottom-20 left-8">
        <div className="w-20 h-20 flex flex-wrap gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-pink-300 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Image with purple background */}
        <div className="relative w-full md:w-1/2 max-w-md">
          <div className="absolute inset-0 bg-purple-500 transform rotate-6 rounded-xl"></div>
          <div className="relative z-10 border-2 border-gray-300 rounded-xl overflow-hidden transform -rotate-3 shadow-lg">
            <img
              src="/api/placeholder/400/500"
              alt="Professional developer"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Content section */}
        <div className="w-full md:w-1/2">
          <div className="text-left">
            <p className="text-red-500 font-medium text-lg mb-2">ABOUT ME</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              I Can Develope Anything<br />
              For Your Needs
            </h2>

            {/* Skills with percentage */}
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="relative w-35 ">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#eee"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E53E3E"
                      strokeWidth="3"
                      strokeDasharray="75, 100"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 font-bold">
                    75%
                  </div>
                </div>
                <p className="text-gray-600">
                  Skilled in front-end technologies like React.js, HTML, and CSS. I focus on creating responsive, user-friendly interfaces tailored to your business goals.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="relative w-35 ">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#eee"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#F6AD55"
                      strokeWidth="3"
                      strokeDasharray="65, 100"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 font-bold">
                    65%
                  </div>
                </div>
                <p className="text-gray-600">
                  Proficient in backend development with Node.js and Express. I build scalable, secure APIs and integrate them seamlessly with frontend applications.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="relative w-35">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#eee"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#6366F1"
                      strokeWidth="3"
                      strokeDasharray="85, 100"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 font-bold">
                    85%
                  </div>
                </div>
                <p className="text-gray-600">
                  Experienced with full-stack project development using the MERN stack. I deliver complete web solutions from design to deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow highlight decorative element */}
      <div className="absolute top-16 right-32">
        <div className="w-6 h-12 bg-yellow-300 opacity-70 transform rotate-12"></div>
      </div>
    </div>
  );
}