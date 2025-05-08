import React from 'react';
import photo_2 from '../assets/images/photo_2.jpg'; // Import your image here

export default function About() {
  return (
    <section className="relative w-full py-12 md:py-16 px-4 md:px-6 bg-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-10 md:top-20 right-4 md:right-8">
        <div className="w-10 h-10 md:w-16 md:h-16 bg-red-300 rounded-full opacity-80"></div>
      </div>
      <div className="absolute bottom-10 md:bottom-20 left-4 md:left-8">
        <div className="w-12 h-12 md:w-20 md:h-20 flex flex-wrap gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 h-1 md:w-2 md:h-2 bg-pink-300 rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="absolute top-8 md:top-16 right-16 md:right-32">
        <div className="w-4 h-8 md:w-6 md:h-12 bg-yellow-300 opacity-70 transform rotate-12"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Image with purple background */}
          <div className="relative w-full md:w-1/2 max-w-md mx-auto md:mx-0">
            <div className="absolute inset-0 bg-purple-500 transform rotate-6 rounded-xl"></div>
            <div className="relative z-10 border-2 border-gray-300 rounded-xl overflow-hidden transform -rotate-3 shadow-lg">
              <img
                src={photo_2}
                alt="Professional developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="text-left">
              <p className="text-red-500 font-medium text-base md:text-lg mb-2">ABOUT ME</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
                I Can Develop Anything<br />
                For Your Needs
              </h2>

              {/* Skills with percentage */}
              <div className="space-y-6 md:space-y-8">
                <SkillBar
                  percentage={75}
                  color="#E53E3E"
                  description="Skilled in front-end technologies like React.js, HTML, and CSS. I focus on creating responsive, user-friendly interfaces."
                />

                <SkillBar
                  percentage={65}
                  color="#F6AD55"
                  description="Proficient in backend development with Node.js and Express. I build scalable, secure APIs and integrate them seamlessly."
                />

                <SkillBar
                  percentage={85}
                  color="#6366F1"
                  description="Experienced with full-stack project development using the MERN stack. I deliver complete web solutions from design to deployment."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Extracted SkillBar component for better organization
function SkillBar({ percentage, color, description }) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
      <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
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
            stroke={color}
            strokeWidth="3"
            strokeDasharray={`${percentage}, 100`}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 font-bold text-sm md:text-base">
          {percentage}%
        </div>
      </div>
      <p className="text-gray-600 text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}